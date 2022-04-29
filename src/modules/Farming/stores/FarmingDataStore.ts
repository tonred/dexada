import BigNumber from 'bignumber.js'
import { Address } from 'everscale-inpage-provider'
import { makeAutoObservable, runInAction, toJS } from 'mobx'

import { FarmingApi, useApi } from '@/modules/Farming/hooks/useApi'
import {
    FarmingPoolResponse, RewardInfo, Transaction, TransactionsRequest,
} from '@/modules/Farming/types'
import { getUserAmount, getUserPendingReward } from '@/modules/Farming/utils'
import { CurrencyInfo } from '@/modules/Currencies/types'
import { useWallet, WalletService } from '@/stores/WalletService'
import { TokenCache, TokensCacheService, useTokensCache } from '@/stores/TokensCacheService'
import {
    Dex, Farm, PairBalances, PoolDetails,
    TokenWallet, UserPendingReward,
} from '@/misc'
import { error } from '@/utils'
import { SECONDS_IN_DAY } from '@/constants'

type PoolData = {
    apiResponse: FarmingPoolResponse;
    poolDetails?: PoolDetails;
    pairBalances?: PairBalances;
    rewardCurrencies: (CurrencyInfo | undefined)[];
}

type UserData = {
    userPoolDataAddress: Address;
    userLpWalletAddress: Address;
    userRewardTokensBalance: string[];
    userLpWalletAmount: string;
    userLpFarmingAmount: string;
    userPendingReward?: UserPendingReward;
    userLastWithdrawTransaction?: Transaction;
    userLastDepositTransaction?: Transaction;
}

type State = {
    poolData?: PoolData;
    userData?: UserData;
    loading: boolean;
}

const defaultState: State = Object.freeze({
    loading: true,
})

export class FarmingDataStore {

    protected state: State = defaultState

    constructor(
        protected api: FarmingApi,
        protected wallet: WalletService,
        protected tokensCache: TokensCacheService,
    ) {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    public dispose(): void {
        this.state = defaultState
    }

    protected async getPoolData(poolAddress: string): Promise<{
        apiResponse: FarmingPoolResponse,
        poolDetails?: PoolDetails,
        pairBalances?: PairBalances,
        rewardCurrencies: (CurrencyInfo | undefined)[],
    }> {
        const [apiResponse, poolDetails] = await Promise.all([
            this.api.farmingPool({
                address: poolAddress,
            }, {}, {
                userAddress: this.wallet.address,
                afterZeroBalance: true,
            }),
            this.wallet.isConnected
                ? Farm.poolGetDetails(
                    new Address(poolAddress),
                )
                : undefined,
        ])

        const pairBalances = (
            this.wallet.isConnected
            && apiResponse.left_address
            && apiResponse.right_address
        ) ? await Dex.pairBalances(
                await Dex.pairAddress(
                    new Address(apiResponse.left_address),
                    new Address(apiResponse.right_address),
                ),
            )
            : undefined

        // FIXME: Hotfix, need to refactoring using objects instead of arrays for rewards data
        if (poolDetails) {
            const cache = apiResponse.reward_token_root_info
                .reduce<any>((acc, item) => ({
                    ...acc,
                    [item.reward_root_address]: item,
                }), {})

            apiResponse.reward_token_root_info = poolDetails.rewardTokenRoot
                .map(root => cache[root.toString()])
        }

        const rewardCurrencies = await Promise.all(
            apiResponse.reward_token_root_info
                .map(reward => (
                    this.api.currency({
                        address: reward.reward_root_address,
                    }).catch(() => undefined)
                )),
        )

        return {
            apiResponse,
            poolDetails,
            pairBalances,
            rewardCurrencies,
        }
    }

    protected async getUserLastTransactions(
        poolAddress: Address,
        ownerAddress: Address,
    ): Promise<{
        deposit?: Transaction,
        withdraw?: Transaction,
    }> {
        const defaultParams = {
            limit: 1,
            offset: 0,
            poolAddress: poolAddress.toString(),
            userAddress: ownerAddress.toString(),
            ordering: 'blocktimedescending',
        } as TransactionsRequest

        const [
            depositTransactions,
            withdrawTransactions,
        ] = await Promise.all([
            this.api.transactions({}, {}, {
                ...defaultParams,
                eventTypes: ['deposit'],
            }),
            this.api.transactions({}, {}, {
                ...defaultParams,
                eventTypes: ['withdraw'],
            }),
        ])

        return {
            deposit: depositTransactions.transactions?.[0],
            withdraw: withdrawTransactions.transactions?.[0],
        }
    }

    protected async getUserData(
        poolAddress: Address,
        lpTokenAddress: Address,
        rewardTokensAddress: Address[],
        farmEndSeconds: string,
    ): Promise<{
        userPoolDataAddress: Address,
        userLpWalletAddress: Address,
        userRewardTokensBalance: string[],
        userLpWalletAmount: string,
        userLpFarmingAmount: string,
        userPendingReward?: UserPendingReward,
        userLastWithdrawTransaction?: Transaction,
        userLastDepositTransaction?: Transaction,
    }> {
        if (!this.wallet.address) {
            throw new Error('Wallet must be connected')
        }

        const ownerAddress = new Address(this.wallet.address)

        const [
            userPoolDataAddress, userLpWalletAddress, userRewardTokensBalance,
        ] = await Promise.all([
            Farm.userDataAddress(
                poolAddress,
                ownerAddress,
            ),
            TokenWallet.walletAddress({
                owner: ownerAddress,
                root: lpTokenAddress,
            }),
            Promise.all(
                rewardTokensAddress.map(tokenAddress => (
                    TokenWallet.balanceByTokenRoot(
                        ownerAddress,
                        tokenAddress,
                    )
                )),
            ),
        ])

        const [
            userLpWalletAmount, userLpFarmingAmount, userPendingReward,
            userLastTransactions,
        ] = await Promise.all([
            TokenWallet.balanceByWalletAddress(
                userLpWalletAddress,
            ),
            getUserAmount(
                userPoolDataAddress,
            ),
            getUserPendingReward(
                poolAddress,
                userPoolDataAddress,
                farmEndSeconds,
            ),
            this.getUserLastTransactions(
                poolAddress,
                ownerAddress,
            ),
        ])

        return {
            userPoolDataAddress,
            userLpWalletAddress,
            userRewardTokensBalance,
            userLpWalletAmount,
            userLpFarmingAmount,
            userPendingReward,
            userLastDepositTransaction: userLastTransactions.deposit,
            userLastWithdrawTransaction: userLastTransactions.withdraw,
        }
    }

    public async getData(poolAddress: string): Promise<void> {
        runInAction(() => {
            this.state.loading = true
        })

        try {
            const poolData = await this.getPoolData(poolAddress)
            const userData = this.wallet.address && poolData.poolDetails
                ? await this.getUserData(
                    new Address(poolAddress),
                    poolData.poolDetails.tokenRoot,
                    poolData.poolDetails.rewardTokenRoot,
                    poolData.poolDetails.farmEndTime,
                )
                : undefined

            runInAction(() => {
                this.state.poolData = poolData
                this.state.userData = userData
            })

            this.syncTokens()
        }
        catch (e) {
            error(e)
        }
        finally {
            runInAction(() => {
                this.state.loading = false
            })
        }
    }

    public async syncData(): Promise<void> {
        try {
            if (!this.poolAddress) {
                throw new Error('Pool address must be exist in state')
            }

            await this.getData(this.poolAddress)
        }
        catch (e) {
            error(e)
        }
    }

    public syncTokens(): void {
        if (this.rewardTokensAddress) {
            this.rewardTokensAddress.forEach(address => {
                this.tokensCache.syncCustomToken(address)
            })
        }

        if (this.leftTokenAddress) {
            this.tokensCache.syncCustomToken(this.leftTokenAddress)
        }

        if (this.rightTokenAddress) {
            this.tokensCache.syncCustomToken(this.rightTokenAddress)
        }

        if ((!this.leftTokenAddress || !this.rightTokenAddress) && this.lpTokenAddress) {
            this.tokensCache.syncCustomToken(this.lpTokenAddress)
        }
    }

    public get loading(): boolean {
        return this.state.loading
    }

    public get dataIsExists(): boolean {
        return this.state.poolData !== undefined
    }

    public get isExternalLpToken(): boolean | undefined {
        if (!this.state.poolData) {
            return undefined
        }

        const { apiResponse } = this.state.poolData

        if (!apiResponse.left_address || !apiResponse.right_address) {
            return true
        }

        return false
    }

    public get apr(): string | undefined | null {
        if (this.isExternalLpToken === true) {
            return null
        }

        return this.state.poolData?.apiResponse.apr
    }

    public get tvl(): string | undefined | null {
        if (this.isExternalLpToken === true) {
            return null
        }

        return this.state.poolData?.apiResponse.tvl
    }

    public get userUsdtBalance(): string | undefined | null {
        if (this.isExternalLpToken === true) {
            return null
        }

        return this.state.poolData?.apiResponse.user_usdt_balance
    }

    public get userHistoryUsdtBalance(): string | undefined | null {
        if (this.isExternalLpToken === true) {
            return null
        }

        return this.state.poolData?.apiResponse.history_info.usdt_amount
    }

    public get userHistoryLeftAmount(): string | undefined | null {
        if (this.isExternalLpToken === true) {
            return null
        }

        return this.state.poolData?.apiResponse.history_info.left_amount
    }

    public get userHistoryRightAmount(): string | undefined | null {
        if (this.isExternalLpToken === true) {
            return null
        }

        return this.state.poolData?.apiResponse.history_info.right_amount
    }

    public get userHistoryLastUpdateTime(): number | undefined {
        const { userData } = this.state

        if (!userData) {
            return undefined
        }

        const depositTimestamp = userData.userLastDepositTransaction?.timestampBlock
        const withdrawTimestamp = userData.userLastWithdrawTransaction?.timestampBlock

        if (!depositTimestamp && !withdrawTimestamp) {
            return undefined
        }

        if (depositTimestamp && withdrawTimestamp) {
            return Math.max(depositTimestamp, withdrawTimestamp)
        }

        return depositTimestamp || withdrawTimestamp
    }

    public get leftTokenAddress(): string | undefined {
        return this.state.poolData?.apiResponse.left_address
    }

    public get leftTokenSymbol(): string | undefined {
        return this.state.poolData?.apiResponse.left_currency
    }

    public get rightTokenAddress(): string | undefined {
        return this.state.poolData?.apiResponse.right_address
    }

    public get rightTokenSymbol(): string | undefined {
        return this.state.poolData?.apiResponse.right_currency
    }

    public get pairBalanceLeft(): string | undefined {
        return this.state.poolData?.pairBalances?.left
    }

    public get pairBalanceRight(): string | undefined {
        return this.state.poolData?.pairBalances?.right
    }

    public get pairBalanceLp(): string | undefined {
        return this.state.poolData?.pairBalances?.lp
    }

    public get userLpWalletAmount(): string | undefined {
        return this.state.userData?.userLpWalletAmount
    }

    public get userLpFarmingAmount(): string | undefined {
        return this.state.userData?.userLpFarmingAmount
    }

    public get lpTokenAddress(): string | undefined {
        return this.state.poolData?.apiResponse.token_root_address
    }

    public get lpTokenSymbol(): string | undefined {
        return this.state.poolData?.apiResponse.token_root_currency
    }

    public get lpTokenDecimals(): number | undefined {
        return this.state.poolData?.apiResponse.token_root_scale
    }

    public get lpTokenBalance(): string | undefined {
        return this.state.poolData?.apiResponse.pool_balance
    }

    public get leftTokenBalance(): string | undefined {
        return this.state.poolData?.apiResponse.left_balance
    }

    public get rightTokenBalance(): string | undefined {
        return this.state.poolData?.apiResponse.right_balance
    }

    public get poolAddress(): string | undefined {
        return this.state.poolData?.apiResponse.pool_address
    }

    public get poolOwnerAddress(): string | undefined {
        return this.state.poolData?.apiResponse.pool_owner_address
    }

    public get userPoolDataAddress(): string | undefined {
        return this.state.userData?.userPoolDataAddress.toString()
    }

    public get userLpWalletAddress(): string | undefined {
        return this.state.userData?.userLpWalletAddress.toString()
    }

    public get poolWalletAddress(): string | undefined {
        return this.state.poolData?.poolDetails?.tokenWallet.toString()
    }

    public get startTime(): number | undefined {
        return this.state.poolData?.apiResponse.farm_start_time
    }

    public get rewardTokensAddress(): string[] | undefined {
        return this.state.poolData?.apiResponse.reward_token_root_info
            .map(reward => reward.reward_root_address)
    }

    public get rewardTokensBalanceCumulative(): string[] | undefined {
        return toJS(this.state.poolData?.poolDetails?.rewardTokenBalanceCumulative)
    }

    public get rewardTokensBalance(): string[] | undefined {
        return toJS(this.state.poolData?.poolDetails?.rewardTokenBalance)
    }

    public get rewardTotalBalance(): string | undefined {
        const { poolData } = this.state

        if (
            !poolData
            || !this.userPendingRewardDebt
            || !this.userPendingRewardEntitled
            || !this.userPendingRewardVested
            || !this.rewardTokensAddress
        ) {
            return undefined
        }

        const { rewardCurrencies } = poolData
        if (rewardCurrencies.includes(undefined)) {
            return undefined
        }

        const rewardTokens = this.rewardTokensAddress
            .map(tokenAddress => this.tokensCache.get(tokenAddress))

        if (rewardTokens.includes(undefined)) {
            return undefined
        }

        const reduceReward = (acc: BigNumber, item: string, index: number): BigNumber => {
            const token = rewardTokens[index] as TokenCache
            if (token === undefined) {
                return acc
            }
            const { decimals } = token
            const currency = rewardCurrencies[index] as CurrencyInfo
            const current = new BigNumber(item).shiftedBy(-decimals).multipliedBy(currency.price)
            return acc.plus(current)
        }

        const debtBalance = this.userPendingRewardDebt
            .reduce<BigNumber>(reduceReward, new BigNumber(0))

        const entitledBalance = this.userPendingRewardEntitled
            .reduce<BigNumber>(reduceReward, new BigNumber(0))

        const vestedBalance = this.userPendingRewardVested
            .reduce<BigNumber>(reduceReward, new BigNumber(0))

        return debtBalance
            .plus(entitledBalance)
            .plus(vestedBalance)
            .toFixed()
    }

    public get userInFarming(): boolean {
        return Boolean(this.state.userData?.userPendingReward)
    }

    public get userPendingRewardVested(): string[] | undefined {
        return toJS(this.state.userData?.userPendingReward?._vested || [])
    }

    public get userPendingRewardEntitled(): string[] | undefined {
        return toJS(this.state.userData?.userPendingReward?._entitled || [])
    }

    public get userPendingRewardDebt(): string[] | undefined {
        return toJS(this.state.userData?.userPendingReward?._pool_debt || [])
    }

    public get userRewardTokensBalance(): string[] | undefined {
        return toJS(this.state.userData?.userRewardTokensBalance)
    }

    public get userShare(): string | undefined {
        return this.state.poolData?.apiResponse.share
    }

    public get vestingTime(): number[] | undefined {
        const { userData } = this.state

        if (!userData || !userData.userPendingReward) {
            return undefined
        }

        return userData.userPendingReward._vesting_time
            .map(seconds => parseInt(seconds, 10) * 1000)
    }

    public get vestingRatio(): number | undefined {
        return this.state.poolData?.apiResponse?.pool_info.vesting_ratio
    }

    public get vestingPeriodDays(): string | undefined {
        if (!this.state.poolData?.apiResponse) {
            return undefined
        }

        return new BigNumber(this.state.poolData.apiResponse.pool_info.vesting_period)
            .div(SECONDS_IN_DAY)
            .decimalPlaces(0, BigNumber.ROUND_DOWN)
            .toFixed()
    }

    public get endTime(): number {
        if (!this.state.poolData?.apiResponse) {
            return 0
        }

        const rounds = this.state.poolData.apiResponse.pool_info.rounds_info
        const lastRound = rounds[rounds.length - 1]

        return lastRound.end_time ? (lastRound.end_time * 1000) : 0
    }

    public get isActive(): boolean {
        return this.endTime === 0 || new Date().getTime() < this.endTime
    }

    public get isAdmin(): boolean {
        if (!this.wallet.address) {
            return false
        }

        return this.poolOwnerAddress === this.wallet.address
    }

    public get rpsAmount(): string[] | undefined {
        const apiResponse = this.state.poolData?.apiResponse

        if (!apiResponse) {
            return undefined
        }

        const activePeriods = apiResponse.pool_info.rounds_info
            .filter(({ start_time }) => (
                start_time * 1000 < new Date().getTime()
            ))

        const currentPeriod = activePeriods.length > 0
            ? activePeriods[activePeriods.length - 1]
            : undefined

        if (currentPeriod) {
            const rewards = currentPeriod.reward_info
                .reduce<{[k: string]: RewardInfo}>((acc, item) => ({
                    ...acc,
                    [item.rewardTokenRootAddress]: item,
                }), {})

            return apiResponse.reward_token_root_info
                .map(item => rewards[item.reward_root_address].rewardPerSec)
        }

        return []
    }

    public get roundRps(): string[][] | undefined {
        const apiResponse = this.state.poolData?.apiResponse

        if (!apiResponse) {
            return undefined
        }

        return toJS(apiResponse.pool_info.rounds_info)
            .map(round => {
                const rewards = round.reward_info
                    .reduce<{[k: string]: RewardInfo}>((acc, item) => ({
                        ...acc,
                        [item.rewardTokenRootAddress]: item,
                    }), {})

                return apiResponse.reward_token_root_info
                    .map(item => rewards[item.reward_root_address].rewardPerSec)
            })
    }

    public get roundStartTimes(): number[] | undefined {
        if (!this.state.poolData?.apiResponse) {
            return undefined
        }

        return toJS(this.state.poolData.apiResponse.pool_info.rounds_info)
            .map(round => round.start_time * 1000)
    }

    public get rewardBalanceIsZero(): boolean | undefined {
        if (!this.rewardTokensBalance) {
            return undefined
        }

        return this.rewardTokensBalance
            .every(amount => new BigNumber(amount).lte(0))
    }

    public get rewardBalanceIsLow(): boolean | undefined {
        return this.state.poolData?.apiResponse.is_low_balance
    }

}

const farmingDataStore = new FarmingDataStore(
    useApi(),
    useWallet(),
    useTokensCache(),
)

export function useFarmingDataStore(): FarmingDataStore {
    return farmingDataStore
}
