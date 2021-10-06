import * as React from 'react'
import { useIntl } from 'react-intl'

import { useAssetsImport } from '@/hooks/useAssetsImport'
import { Icon } from '@/components/common/Icon'


type Props = {
    rootTokenContract: string;
}

export function AddTokenAsset({ rootTokenContract }: Props): JSX.Element {
    const intl = useIntl()
    const { addTokenAsset } = useAssetsImport()

    const [inProgress, setInProgress] = React.useState(false)
    const [added, setAdded] = React.useState(false)

    const onClick = async () => {
        if (inProgress) {
            return
        }

        setInProgress(true)
        try {
            await addTokenAsset(rootTokenContract)
            setAdded(true)
        }
        finally {
            setInProgress(false)
        }
    }

    const disabled = inProgress || added

    const buttonText: React.ReactNode = added
        ? intl.formatMessage({ id: 'ADD_TOKEN_ASSET_ADDED' })
        : intl.formatMessage({ id: 'ADD_TOKEN_ASSET' })

    return (
        <button
            onClick={onClick}
            type="button"
            disabled={disabled}
            className="btn btn-secondary"
        >
            {inProgress ? <Icon icon="loader" className="spin" /> : buttonText}
        </button>
    )
}
