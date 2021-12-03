import * as React from 'react'
import { useIntl } from 'react-intl'

import { Button } from '@/components/common/Button'
import { SectionTitle } from '@/components/common/SectionTitle'
import { PoolsContent } from '@/modules/Pools/components/PoolsContent'
import { WalletConnector } from '@/modules/WalletConnector'
import { AccountConnector } from '@/modules/AccountConnector'

import './style.scss'

export function Pools(): JSX.Element {
    const intl = useIntl()

    return (
        <div className="container container--large">
            <section className="section">
                <div className="section__header section__header_wrap">
                    <SectionTitle>
                        {intl.formatMessage({ id: 'POOLS_LIST_TITLE' })}
                    </SectionTitle>

                    <div className="section__header-actions">
                        <Button link="/pools/burn-liquidity" size="md" type="secondary">
                            {intl.formatMessage({ id: 'POOLS_LIST_HEADER_REMOVE' })}
                        </Button>

                        <Button link="/pool" size="md" type="primary">
                            {intl.formatMessage({ id: 'POOLS_LIST_HEADER_NEW' })}
                        </Button>
                    </div>
                </div>
                <WalletConnector
                    message={intl.formatMessage({ id: 'POOLS_LIST_CONNECT_WALLET_TITLE' })}
                >
                    <AccountConnector>
                        <PoolsContent />
                    </AccountConnector>
                </WalletConnector>
            </section>
        </div>
    )
}
