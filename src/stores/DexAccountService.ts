import { Address, TransactionId } from 'everscale-inpage-provider'
import {
    computed, IReactionDisposer, makeObservable, reaction,
} from 'mobx'

import { Dex, getDexAccount } from '@/misc'
import { BaseStore } from '@/stores/BaseStore'
import { useWallet, WalletService } from '@/stores/WalletService'
import { debounce, timeoutPromise } from '@/utils'


export type Balances = Map<string, string>

export type DexAccountData = {
    address?: string;
    balances?: Balances;
    wallets?: Map<string, Address>;
}


const DEFAULT_DEX_ACCOUNT_DATA: DexAccountData = {
    address: undefined,
    balances: undefined,
    wallets: undefined,
}


export class DexAccountService extends BaseStore<DexAccountData, never> {

    constructor(protected readonly wallet: WalletService) {
        super()

        this.setData(() => DEFAULT_DEX_ACCOUNT_DATA)

        makeObservable(this, {
            address: computed,
            balances: computed,
            wallets: computed,
            isConnected: computed,
        })

        this.#walletAccountDisposer = reaction(() => this.wallet.address, () => {
            this.setData(() => DEFAULT_DEX_ACCOUNT_DATA)
        })
    }

    /**
     * Manually connect to the DEX account.
     * @returns {Promise<void>}
     */
    public async connect(): Promise<void> {
        if (!this.wallet.address) {
            return
        }

        const address = await getDexAccount(this.wallet.address)

        this.setData('address', address)
    }

    /**
     * Manually create DEX account
     * @returns {Promise<TransactionId | undefined>}
     */
    public async create(): Promise<TransactionId | undefined> {
        if (!this.wallet.address) {
            return undefined
        }

        return Dex.createAccount(new Address(this.wallet.address))
    }

    /**
     * Try to connect to the DEX account, else create a new one
     * @returns {Promise<void>}
     */
    public async connectOrCreate(): Promise<void> {
        if (!this.wallet.address) {
            return
        }

        await this.connect()

        if (!this.address) {
            await this.create()
        }

        await this.connect()
    }

    public async checkConnect(timeout: number = 60000): Promise<void> {
        return timeoutPromise<void>(new Promise((resolve, reject) => {
            const check = debounce(async () => {
                if (this.isConnected) {
                    resolve()
                    return
                }

                try {
                    await this.connect()
                }
                catch (e) {
                    reject(e)
                }
                finally {
                    check()
                }
            }, 5000)

            check()
        }), timeout)
    }

    /**
     * Connect to the DEX account and sync nonce, balances, and run balances updater
     * @returns {Promise<void>}
     */
    public async connectAndSync(): Promise<void> {
        if (!this.wallet.address) {
            return
        }

        await this.connect()

        if (!this.address) {
            return
        }

        await this.sync()
    }

    /**
     *
     */
    public async sync(): Promise<void> {
        await this.syncBalances()
        await this.syncWallets()
        this.runBalancesUpdater()
    }

    /**
     * Sync DEX account balances
     * @returns {Promise<void>}
     */
    public async syncBalances(): Promise<void> {
        if (!this.wallet.account || !this.address) {
            return
        }

        const balances = await Dex.accountBalances(new Address(this.address))

        this.setData('balances', balances)
    }

    /**
     * Sync DEX account wallets
     * @returns {Promise<void>}
     */
    public async syncWallets(): Promise<void> {
        if (!this.wallet.account || !this.address) {
            return
        }

        const wallets = await Dex.accountWallets(new Address(this.address))

        this.setData('wallets', wallets)
    }

    /**
     * Withdraw token by the given root address and amount
     * @param {string} root
     * @param {string} amount
     * @param {string} callId
     * @returns {Promise<void>}
     */
    public async withdrawToken(root: string, amount: string, callId: string): Promise<void> {
        if (!this.wallet.address || !this.address || !root || !amount || !callId) {
            return
        }

        await Dex.withdrawAccountTokens(
            new Address(this.address),
            new Address(root),
            new Address(this.wallet.address),
            amount,
            callId,
        )
    }

    /**
     * Returns account wallet by the given account root address
     * @param {string} root
     */
    public getAccountWallet(root: string | undefined): Address | undefined {
        if (!root) {
            return undefined
        }
        return this.wallets?.get(root)
    }

    /**
     *
     * @param address
     */
    public getBalance(address: Address): string | undefined {
        return this.balances?.get(address.toString())
    }

    /**
     * Returns DEX account address
     */
    public get address(): DexAccountData['address'] {
        return this.data.address
    }

    /**
     * Returns map of the DEX account balances
     */
    public get balances(): DexAccountData['balances'] {
        return this.data.balances
    }

    /**
     * Returns map of the DEX account wallets
     */
    public get wallets(): DexAccountData['wallets'] {
        return this.data.wallets
    }

    public get isConnected(): boolean {
        return Boolean(this.address)
    }

    /**
     *
     */
    public stopBalancesUpdater(): void {
        if (this.#balancesInterval !== undefined) {
            clearInterval(this.#balancesInterval)
            this.#balancesInterval = undefined
        }
    }

    /**
     * @protected
     */
    protected runBalancesUpdater(): void {
        this.stopBalancesUpdater()

        this.#balancesInterval = setInterval(async () => {
            await this.syncBalances()
        }, 5000)
    }

    /**
     *
     * @private
     */
    #walletAccountDisposer: IReactionDisposer | undefined

    /**
     *
     * @private
     */
    #balancesInterval: ReturnType<typeof setInterval> | undefined

}


const DexAccount = new DexAccountService(useWallet())

export function useDexAccount(): DexAccountService {
    return DexAccount
}
