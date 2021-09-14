import * as React from 'react'
import BigNumber from 'bignumber.js'
import { Address } from 'ton-inpage-provider'

import { useDexBalances } from '@/modules/Pools/hooks/useDexBalances'
import { FarmingPoolInfo } from '@/modules/Farming/types'
import { useFavoritePairs } from '@/stores/FavoritePairs'
import { useWallet } from '@/stores/WalletService'
import { useDexAccount } from '@/stores/DexAccountService'
import { useTokensList } from '@/stores/TokensListService'
import { useTokensCache } from '@/stores/TokensCacheService'
import { usePagination } from '@/hooks/usePagination'
import { useApi } from '@/modules/Pools/hooks/useApi'
import {
    amountOrZero, concatSymbols, error, shareAmount,
} from '@/utils'
import { Pool, PoolData } from '@/misc'
import { appRoutes } from '@/routes'
import { ItemProps } from '@/modules/Pools/components/PoolsContent/item'

type UsePoolsContent = {
    loading: boolean;
    totalPages: number;
    items: ItemProps[];
    query: string;
    onSearch: (value: string) => void;
}

const PAGE_LENGTH = 10

export function usePoolsContent(): UsePoolsContent {
    const api = useApi()
    const wallet = useWallet()
    const dexAccount = useDexAccount()
    const dexBalances = useDexBalances()
    const tokensList = useTokensList()
    const pagination = usePagination()
    const favoritePairs = useFavoritePairs()
    const tokensCache = useTokensCache()
    const [query, setQuery] = React.useState('')
    const [loading, setLoading] = React.useState(true)
    const [data, setData] = React.useState<PoolData[]>([])
    const [totalPages, setTotalPages] = React.useState(0)
    const [lockedLp, setLockedLp] = React.useState<Record<string, string>>({})
    const startIndex = PAGE_LENGTH * (pagination.currentPage - 1)
    const endIndex = startIndex + PAGE_LENGTH

    const items = React.useMemo(() => (
        (data
            .map(({
                address, lp, left, right,
            }) => {
                const leftToken = tokensCache.get(left.address)
                const rightToken = tokensCache.get(right.address)

                if (!leftToken || !rightToken) {
                    return undefined
                }

                const lpTokens = new BigNumber(lp.inWallet)
                    .plus(lockedLp[lp.address] || '0')
                    .toFixed()

                return {
                    lpTokens: amountOrZero(lpTokens, lp.decimals),
                    leftToken: shareAmount(
                        lpTokens,
                        left.inPool,
                        lp.inPool,
                        leftToken.decimals,
                    ),
                    rightToken: shareAmount(
                        lpTokens,
                        right.inPool,
                        lp.inPool,
                        rightToken.decimals,
                    ),
                    link: appRoutes.poolItem.makeUrl({ address }),
                    pair: {
                        pairLabel: concatSymbols(
                            tokensCache.get(left.address)?.symbol,
                            tokensCache.get(right.address)?.symbol,
                        ),
                        pairIcons: {
                            leftToken: {
                                address: left.address,
                                uri: tokensList.getUri(left.address),
                            },
                            rightToken: {
                                address: right.address,
                                uri: tokensList.getUri(right.address),
                            },
                        },
                    },
                }
            })
            .filter(item => item !== undefined) as ItemProps[])
            .sort((a, b) => new BigNumber(a.lpTokens).comparedTo(b.lpTokens))
            .reverse()
    ), [data, tokensList])

    const getFarmingPools = async (
        userAddress: string,
        limit: number = 100,
    ): Promise<FarmingPoolInfo[]> => {
        const { total_count, pools_info } = await api.farmingPools({}, {
            body: JSON.stringify({
                limit,
                offset: 0,
                userAddress,
                isWithMyFarming: true,
                ordering: 'tvlascending',
            }),
        })
        let poolsInfo = pools_info.filter(item => (
            item.left_address
            && item.left_currency
            && item.right_address
            && item.right_currency
        ))
        if (total_count > 100) {
            poolsInfo = await getFarmingPools(userAddress, total_count)
        }
        return poolsInfo
    }

    const getLockedLpInFarming = async (userAddress: string) => {
        const farmingPools = await getFarmingPools(userAddress)
        const byRootToken = farmingPools.reduce((acc, item) => {
            acc[item.token_root_address] = acc[item.token_root_address]
                ? new BigNumber(acc[item.token_root_address])
                    .plus(new BigNumber(item.user_token_balance)
                        .shiftedBy(item.token_root_scale))
                    .toFixed()
                : new BigNumber(item.user_token_balance)
                    .shiftedBy(item.token_root_scale)
                    .toFixed()
            return acc
        }, {} as Record<string, string>)

        return byRootToken
    }

    const getData = async () => {
        if (!dexAccount.address || !wallet.address) {
            return
        }
        setLoading(true)
        try {
            const pairs = favoritePairs.filterData(query)
            const visiblePairs = pairs.slice(startIndex, endIndex)
            const addresses = visiblePairs.map(item => item.address)
            const ownerAddress = new Address(wallet.address)
            const [pools, lockedLpByRoot] = await Promise.all([
                Pool.pools(addresses, ownerAddress),
                getLockedLpInFarming(wallet.address),
            ])
            await Promise.all(
                pools.map(pool => Promise.all([
                    tokensCache.fetchAndImportIfNotExist(pool.left.address),
                    tokensCache.fetchAndImportIfNotExist(pool.right.address),
                ])),
            )
            setTotalPages(Math.ceil(pairs.length / PAGE_LENGTH))
            setLockedLp(lockedLpByRoot)
            setData(pools)
        }
        catch (e) {
            error(e)
        }
        setLoading(false)
    }

    const onSearch = React.useCallback(
        (value: string) => {
            setQuery(value)
        },
        [setQuery],
    )

    React.useEffect(() => {
        getData()
    }, [
        query,
        dexBalances,
        pagination.currentPage,
        wallet.address,
    ])

    return {
        loading,
        totalPages,
        items,
        query,
        onSearch,
    }
}
