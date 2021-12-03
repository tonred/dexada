import * as React from 'react'
import { observer } from 'mobx-react-lite'
import { useIntl } from 'react-intl'

import { Button } from '@/components/common/Button'
import { Icon } from '@/components/common/Icon'
import { useBalanceValidation } from '@/hooks/useBalanceValidation'
import { useWallet } from '@/stores/WalletService'
import { useSwapStore } from '@/modules/Swap/stores/SwapStore'
import { SwapDirection } from '@/modules/Swap/types'


function SubmitButton(): JSX.Element {
    const intl = useIntl()
    const wallet = useWallet()
    const swap = useSwapStore()

    if (swap.isSwapping || swap.isPairChecking || swap.isCalculating) {
        return (
            <Button
                aria-disabled="true"
                block
                className="form-submit"
                disabled
                size="lg"
                type="primary"
            >
                <Icon icon="loader" className="spin" />
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

        case swap.pair === undefined || !swap.isEnoughLiquidity:
            buttonProps.disabled = true
            buttonText = intl.formatMessage({
                id: 'SWAP_BTN_TEXT_NOT_ENOUGH_LIQUIDITY',
            })
            break

        case swap.leftAmount.length === 0 && swap.direction === SwapDirection.LTR:
        case swap.rightAmount.length === 0 && swap.direction === SwapDirection.RTL:
            buttonProps.disabled = true
            buttonText = intl.formatMessage({
                id: 'SWAP_BTN_TEXT_ENTER_AN_AMOUNT',
            })
            break

        case !useBalanceValidation(swap.leftToken, swap.leftAmount):
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

        case swap.isDirectSwapValid:
            buttonProps.onClick = () => {
                swap.changeState('isConfirmationAwait', true)
            }
            break

        default:
            buttonProps.disabled = !swap.isDirectSwapValid || swap.isLoading
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

export const SwapSubmitButton = observer(SubmitButton)
