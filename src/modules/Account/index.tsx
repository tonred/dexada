import * as React from 'react'
import { Observer } from 'mobx-react-lite'
import { useIntl } from 'react-intl'

import { Button } from '@/components/common/Button'
import { Icon } from '@/components/common/Icon'
import { UserAvatar } from '@/components/common/UserAvatar'
import { useWallet } from '@/stores/WalletService'
import { formattedAmount, sliceAddress } from '@/utils'

import './index.scss'


export function Account(): JSX.Element | null {
    const intl = useIntl()
    const wallet = useWallet()

    return (
        <Observer>
            {() => (wallet.isInitialized ? (
                <div key="ton-wallet" className="wallet">
                    {!wallet.isConnected ? (
                        <Button
                            key="guest"
                            aria-disabled={wallet.isConnecting}
                            disabled={wallet.isConnecting}
                            size="md"
                            type="primary"
                            onClick={wallet.connect}
                        >
                            {intl.formatMessage({
                                id: 'WALLET_BTN_TEXT_CONNECT',
                            })}
                        </Button>
                    ) : (
                        <div key="wrapper" className="wallet__wrapper">
                            <div className="wallet__user-avatar">
                                <UserAvatar
                                    address={wallet.address!}
                                    size="small"
                                />
                            </div>
                            <div className="wallet__info">
                                <div className="wallet__address">
                                    {sliceAddress(wallet.address)}
                                </div>
                                {wallet.balance !== undefined && (
                                    <div key="balance" className="wallet__balance">
                                        {intl.formatMessage({
                                            id: 'WALLET_BALANCE_HINT',
                                        }, {
                                            balance: formattedAmount(
                                                wallet.balance,
                                                9,
                                            ) || 0,
                                            currency: 'TON',
                                        })}
                                    </div>
                                )}
                            </div>

                            <Button
                                key="logout"
                                className="btn-logout"
                                type="secondary"
                                onClick={wallet.disconnect}
                            >
                                <Icon icon="logout" />
                            </Button>
                        </div>
                    )}
                </div>
            ) : null)}
        </Observer>
    )
}
