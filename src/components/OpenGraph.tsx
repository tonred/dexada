import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useIntl } from 'react-intl'

export function OpenGraph(): JSX.Element {
    const intl = useIntl()

    return (
        <Helmet>
            <title>{intl.formatMessage({ id: 'OG_META_TITLE' })}</title>
            <meta property="title" content={intl.formatMessage({ id: 'OG_META_TITLE' })} />
            <meta property="description" content={intl.formatMessage({ id: 'OG_META_DESCRIPTION' })} />
            <meta property="image" content="https://app.dexada.io/assets/meta-image.jpg" />
            <meta property="twitter:title" content={intl.formatMessage({ id: 'OG_META_TITLE' })} />
            <meta property="twitter:description" content={intl.formatMessage({ id: 'OG_META_DESCRIPTION' })} />
            <meta property="twitter:image" content="https://app.dexada.io/assets/meta-image.jpg" />
            <meta property="twitter:url" content="https://app.dexada.io" />
            <meta property="og:title" content={intl.formatMessage({ id: 'OG_META_TITLE' })} />
            <meta property="og:description" content={intl.formatMessage({ id: 'OG_META_DESCRIPTION' })} />
            <meta property="og:image" content="https://app.dexada.io/assets/meta-image.jpg" />
            <meta property="og:url" content="https://app.dexada.io" />
            <meta property="og:type" content="website" />
        </Helmet>
    )
}
