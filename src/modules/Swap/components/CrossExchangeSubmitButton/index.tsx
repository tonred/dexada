import * as React from 'react'
import { observer } from 'mobx-react-lite'
import { useIntl } from 'react-intl'

import { Button } from '@/components/common/Button'
import { Icon } from '@/components/common/Icon'
import { useWallet } from '@/stores/WalletService'
import { useSwapStore } from '@/modules/Swap/stores/SwapStore'
import { useBalanceValidation } from '@/hooks/useBalanceValidation'
import { SwapDirection } from '@/modules/Swap/types'


function SubmitButton(): JSX.Element {
    const intl = useIntl()
    const wallet = useWallet()
    const swap = useSwapStore()

    if (swap.isSwapping || swap.isCrossExchangePreparing || swap.isCrossExchangeCalculating) {
        return (
            <Button
                aria-disabled="true"
                block
                className="form-submit"
                disabled
                size="lg"
                type="primary"
            >
                <div className="popup-main__loader">
                    <Icon icon="loader" />
                </div>
            </Button>
        )
    }

    const buttonProps: Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> = {}
    let buttonText: React.ReactNode = intl.formatMessage({ id: 'SWAP_BTN_TEXT_SUBMIT' })

    switch (true) {
        case wallet.account === undefined:
            buttonProps.disabled = wallet.isConnecting
            buttonProps.onClick = async () => {
                await wallet.connect()
            }
            buttonText = intl.formatMessage({
                id: 'WALLET_BTN_TEXT_CONNECT',
            })
            break

        case swap.leftToken === undefined || swap.rightToken === undefined:
            buttonProps.disabled = true
            buttonText = intl.formatMessage({
                id: 'SWAP_BTN_TEXT_SELECT_A_TOKEN',
            })
            break

        case swap.leftAmount.length === 0 && swap.direction === SwapDirection.LTR:
        case swap.rightAmount.length === 0 && swap.direction === SwapDirection.RTL:
            buttonProps.disabled = true
            buttonText = intl.formatMessage({
                id: 'SWAP_BTN_TEXT_ENTER_AN_AMOUNT',
            })
            break

        case !swap.isCrossExchangeAvailable:
            buttonProps.disabled = true
            buttonText = intl.formatMessage({
                id: 'SWAP_BTN_TEXT_ROUTE_DOES_NOT_EXIST',
            })
            break

        case !useBalanceValidation(
            swap.leftToken,
            swap.direction === SwapDirection.LTR
                ? swap.leftAmount
                : swap.bestCrossExchangeRoute?.leftAmount,
        ):
            buttonProps.disabled = true
            buttonText = intl.formatMessage({
                id: 'SWAP_BTN_TEXT_INSUFFICIENT_TOKEN_BALANCE',
            }, {
                symbol: swap.leftToken?.symbol || '',
                // eslint-disable-next-line react/no-multi-comp,react/destructuring-assignment,react/no-unstable-nested-components
                s: parts => <span className="truncate-name">{parts.join('')}</span>,
            })
            break

        case swap.isConfirmationAwait:
            buttonProps.disabled = true
            buttonText = intl.formatMessage({
                id: 'SWAP_BTN_TEXT_CONFIRMATION_AWAIT',
            })
            break

        case swap.isCrossExchangeSwapValid:
            buttonProps.onClick = () => {
                swap.changeState('isConfirmationAwait', true)
            }
            break

        default:
            buttonProps.disabled = !swap.isCrossExchangeSwapValid || swap.isLoading
    }

    return (
        <Button
            aria-disabled={buttonProps.disabled}
            block
            className="form-submit"
            size="lg"
            type="primary"
            {...buttonProps}
        >
            {buttonText}
        </Button>
    )
}

export const CrossExchangeSubmitButton = observer(SubmitButton)
