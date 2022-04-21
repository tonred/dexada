import * as React from 'react'
import { useIntl } from 'react-intl'
import { Helmet } from 'react-helmet'

import { Logo } from '@/components/layout/Logo'
import { Nav } from '@/components/layout/Nav'

import './index.scss'
import Languages from '../Languages'


export function Header(): JSX.Element {
    const intl = useIntl()
    return (
        <header className="header">
            <Logo />
            <Nav />
            <div className="mobile-languages">
                <Languages />
            </div>
            <Helmet>
                <meta property='title' content={intl.formatMessage({ id: 'OG_META_TITLE' })}/>
                <meta property='description' content={intl.formatMessage({ id: 'OG_META_DESCRIPTION' })} />
                <meta property='image' content={intl.formatMessage({ id: 'OG_META_IMG' })}/>
                <meta property="twitter:title" content={intl.formatMessage({ id: 'OG_META_TITLE' })}/>
                <meta property="twitter:description" content={intl.formatMessage({ id: 'OG_META_DESCRIPTION' })} />
                <meta property="twitter:image" content={intl.formatMessage({ id: 'OG_META_IMG' })} />
                <meta property="og:title" content={intl.formatMessage({ id: 'OG_META_TITLE' })} />
                <meta property="og:description" content={intl.formatMessage({ id: 'OG_META_DESCRIPTION' })} />
                <meta property="og:image" content={intl.formatMessage({ id: 'OG_META_IMG' })} />

            </Helmet>
        </header>
    )
}
