import * as React from 'react'
import { observer } from 'mobx-react-lite'
import { useIntl } from 'react-intl'

import { Icon } from '@/components/common/Icon'
import { usePool } from '@/modules/Pool/stores/PoolStore'
import { formatBalance } from '@/utils'


function DexAccountData(): JSX.Element {
    const intl = useIntl()
    const pool = usePool()

    const onWithdrawLeftToken = async () => {
        if (pool.leftToken && pool.dexLeftBalance) {
            await pool.withdrawToken(pool.leftToken.root, pool.dexLeftBalance)
        }
    }

    const onWithdrawRightToken = async () => {
        if (pool.rightToken && pool.dexRightBalance) {
            await pool.withdrawToken(pool.rightToken.root, pool.dexRightBalance)
        }
    }

    const onWithdrawLpToken = async () => {
        if (pool.lpRoot && pool.lpBalance) {
            await pool.withdrawToken(pool.lpRoot, pool.lpBalance)
        }
    }

    const onDepositLp = async () => {
        await pool.depositLp()
    }

    const onWithdrawLiquidity = async () => {
        await pool.withdrawLiquidity()
    }


    return (
        <div className="list-bill">
            <div className="list-bill__row">
                <div className="list-bill__info">
                    {intl.formatMessage({
                        id: 'POOL_DATA_SUBTITLE_DEX_ACCOUNT',
                    })}
                </div>
            </div>

            {pool.leftToken && (
                <div key="dexLeftBalance" className="list-bill__row">
                    <div className="list-bill__info">
                        <span>
                            {pool.leftToken.symbol}
                        </span>
                        {pool.isLeftTokenWithdrawAvailable && (
                            <button
                                type="button"
                                className="btn btn-icon"
                                title="Withdraw"
                                onClick={onWithdrawLeftToken}
                            >
                                {pool.isWithdrawingLeftToken ? (
                                    <Icon icon="loader" ratio={0.6} className="spin" />
                                ) : (
                                    <Icon icon="push" ratio={0.7} />
                                )}
                            </button>
                        )}
                    </div>
                    <div className="list-bill__val">
                        {formatBalance(pool.dexLeftBalance, pool.leftToken.decimals) || '0'}
                    </div>
                </div>
            )}

            {pool.rightToken && (
                <div key="dexRightBalance" className="list-bill__row">
                    <div className="list-bill__info">
                        <span>
                            {pool.rightToken.symbol}
                        </span>
                        {pool.isRightTokenWithdrawAvailable && (
                            <button
                                type="button"
                                className="btn btn-icon"
                                title="Withdraw"
                                onClick={onWithdrawRightToken}
                            >
                                {pool.isWithdrawingRightToken ? (
                                    <Icon icon="loader" ratio={0.6} className="spin" />
                                ) : (
                                    <Icon icon="push" ratio={0.7} />
                                )}
                            </button>
                        )}
                    </div>
                    <div className="list-bill__val">
                        {formatBalance(pool.dexRightBalance, pool.rightToken.decimals) || '0'}
                    </div>
                </div>
            )}

            {pool.lpBalance && (
                <div key="lpBalance" className="list-bill__row">
                    <div className="list-bill__info">
                        <span>
                            {intl.formatMessage({
                                id: 'POOL_DEX_DATA_LABEL_LP_TOKENS',
                            })}
                        </span>
                        {pool.isWithdrawLpAvailable && (
                            <button
                                key="withdrawLp"
                                type="button"
                                className="btn btn-icon"
                                title="Withdraw"
                                onClick={onWithdrawLpToken}
                            >
                                {pool.isWithdrawingLp ? (
                                    <Icon icon="loader" ratio={0.6} className="spin" />
                                ) : (
                                    <Icon icon="push" ratio={0.7} />
                                )}
                            </button>
                        )}
                        {pool.isDepositLpAvailable && (
                            <button
                                key="depositLp"
                                type="button"
                                className="btn btn-icon"
                                title="Deposit"
                                onClick={onDepositLp}
                            >
                                {pool.isDepositingLp ? (
                                    <Icon icon="loader" ratio={0.6} className="spin" />
                                ) : (
                                    <Icon icon="pull" ratio={0.7} />
                                )}
                            </button>
                        )}
                        {pool.isWithdrawLpAvailable && (
                            <button
                                key="withdrawLiquidity"
                                type="button"
                                className="btn btn-icon"
                                title="Withdraw Liquidity"
                                onClick={onWithdrawLiquidity}
                            >
                                {pool.isWithdrawingLiquidity ? (
                                    <Icon icon="loader" ratio={0.6} className="spin" />
                                ) : (
                                    <Icon icon="remove" ratio={0.9} />
                                )}
                            </button>
                        )}
                    </div>
                    <div className="list-bill__val">
                        {formatBalance(pool.lpBalance, pool.lpDecimals) || '0'}
                    </div>
                </div>
            )}

            {pool.currentSharePercent && (
                <div key="currentSharePercent" className="list-bill__row">
                    <div className="list-bill__info">
                        <span>
                            {intl.formatMessage({
                                id: 'POOL_DEX_DATA_LABEL_CURRENT_SHARE',
                            })}
                        </span>
                    </div>
                    <div className="list-bill__val">
                        {intl.formatMessage({
                            id: 'POOL_DEX_DATA_RESULT_CURRENT_SHARE',
                        }, {
                            value: pool.currentSharePercent,
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}

export const PoolDexAccountData = observer(DexAccountData)