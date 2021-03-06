import * as React from 'react'

import { AmountInput } from '@/components/common/AmountInput'
import { Button } from '@/components/common/Button'
import { ContentLoader } from '@/components/common/ContentLoader'

import './index.scss'

type Props = {
    action: string;
    decimals?: number;
    hint?: string;
    value: string;
    inputDisabled?: boolean;
    submitDisabled?: boolean;
    maxValue?: string;
    loading?: boolean;
    onSubmit: (value: string) => void;
    onChange?: (value: string) => void;
}

export function FarmingAction({
    action,
    decimals,
    hint,
    value,
    inputDisabled,
    submitDisabled,
    maxValue,
    loading,
    onSubmit,
    onChange,
}: Props): JSX.Element {
    const onClickMax = () => {
        if (maxValue) {
            onChange?.(maxValue)
        }
    }

    const onClickSubmit = () => {
        onSubmit(value)
    }

    return (
        <div className="farming-action">
            <div className="farming-action__ctrl">
                <AmountInput
                    decimals={decimals}
                    disabled={inputDisabled || loading}
                    value={value}
                    onChange={onChange}
                    onClickMax={onClickMax}
                    maxIsVisible={maxValue !== undefined}
                />

                <Button
                    disabled={submitDisabled || loading}
                    className="btn-with-icon"
                    type="primary"
                    onClick={onClickSubmit}
                >
                    {action}
                    {loading && (
                        <ContentLoader slim size="s" />
                    )}
                </Button>
            </div>

            {hint && (
                <div className="farming-action__hint">
                    {hint}
                </div>
            )}
        </div>
    )
}
