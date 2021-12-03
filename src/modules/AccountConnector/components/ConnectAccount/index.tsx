import * as React from 'react'
import { useIntl } from 'react-intl'
import { observer } from 'mobx-react-lite'

import { Button } from '@/components/common/Button'
import { ContentLoader } from '@/components/common/ContentLoader'
import { useDexAccount } from '@/stores/DexAccountService'
import { error } from '@/utils'

export const ConnectAccount = observer((): JSX.Element => {
    const intl = useIntl()
    const dex = useDexAccount()
    const [loading, setLoading] = React.useState(false)

    const connect = async () => {
        setLoading(true)
        try {
            await dex.connectOrCreate()
            await dex.checkConnect()
            await dex.sync()
        }
        catch (e) {
            error(e)
        }
        setLoading(false)
    }

    return (
        <div className="card card--small card--flat">
            <div className="message message_faded">
                <p>
                    {intl.formatMessage({ id: 'ACCOUNT_CONNECTOR_NOTE' })}
                </p>

                <Button
                    className="btn-with-icon"
                    disabled={loading}
                    type="secondary"
                    onClick={connect}
                >
                    {intl.formatMessage({ id: 'ACCOUNT_CONNECTOR_BUTTON' })}
                    {loading && (
                        <ContentLoader slim size="s" />
                    )}
                </Button>
            </div>
        </div>
    )
})
