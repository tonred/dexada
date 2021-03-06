import * as React from 'react'
import { Observer } from 'mobx-react-lite'
import { useIntl } from 'react-intl'
import { Link, NavLink } from 'react-router-dom'

import { Button } from '@/components/common/Button'
import { Icon } from '@/components/common/Icon'
import { Logo } from '@/components/layout/Logo'
import { useWallet } from '@/stores/WalletService'

import './index.scss'
// @ts-ignore
import PrivacyPolicyPdf from './policy/Dexada_Privacy_Policy.pdf'
// @ts-ignore
import TermsOfUse from './policy/Dexada_Terms_of_use.pdf'

export function Footer(): JSX.Element {
    const intl = useIntl()
    const wallet = useWallet()

    const toolbar = (
        <div className="toolbar">
            <Observer>
                {() => (
                    <>
                        {(!wallet.isInitialized && !wallet.isInitializing) && (
                            <Button
                                href="https://l1.broxus.com/everscale/wallet"
                                className="footer-tool"
                                rel="noopener noreferrer"
                                size="md"
                                target="_blank"
                                type="primary"
                            >
                                {intl.formatMessage({
                                    id: 'WALLET_INSTALLATION_LINK_TEXT',
                                })}
                            </Button>
                        )}
                    </>
                )}
            </Observer>
            <Button
                className="footer-tool"
                ghost
                href="https://github.com/broxus/ton-dex"
                rel="noopener noreferrer"
                size="md"
                target="_blank"
                type="tertiary"
            >
                {intl.formatMessage({
                    id: 'FOOTER_GITHUB_LINK_TEXT',
                })}
            </Button>
        </div>
    )

    return (
        <footer className="footer">
            <div className="container container--large">
                <div className="footer__wrapper">
                    <div className="footer__left">
                        <Link to="/" className="footer-logo">
                            <Logo />
                        </Link>
                        {toolbar}
                    </div>
                    <nav className="footer-nav">
                        <div className="footer-nav__col">
                            <div className="footer-nav__col-title">
                                {intl.formatMessage({
                                    id: 'FOOTER_NAV_HEADER_PRODUCT',
                                })}
                            </div>
                            <ul className="footer-nav__list">
                                <li>
                                    <NavLink to="/swap">
                                        {intl.formatMessage({
                                            id: 'NAV_LINK_TEXT_SWAP',
                                        })}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/pools">
                                        {intl.formatMessage({
                                            id: 'NAV_LINK_TEXT_POOLS',
                                        })}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/tokens">
                                        {intl.formatMessage({
                                            id: 'NAV_LINK_TEXT_TOKENS',
                                        })}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/pairs">
                                        {intl.formatMessage({
                                            id: 'NAV_LINK_TEXT_PAIRS',
                                        })}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/farming">
                                        {intl.formatMessage({
                                            id: 'NAV_LINK_TEXT_FARMING',
                                        })}
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-nav__col">
                            <div className="footer-nav__col-title">
                                {intl.formatMessage({
                                    id: 'FOOTER_NAV_HEADER_OUR_PRODUCTS',
                                })}
                            </div>
                            <ul className="footer-nav__list">
                                <li>
                                    <a href="https://adaever.io" target="_blank" rel="noopener noreferrer">
                                        {intl.formatMessage({
                                            id: 'FOOTER_NAV_ADAEVER_BRIDGE_LINK_TEXT',
                                        })}
                                    </a>
                                </li>
                                <li>
                                    <a href="https://app.octusbridge.io" target="_blank" rel="noopener noreferrer">
                                        {intl.formatMessage({
                                            id: 'FOOTER_NAV_OCTUS_BRIDGE_LINK_TEXT',
                                        })}
                                    </a>
                                </li>
                                <li>
                                    <a href="https://everscan.io" target="_blank" rel="noopener noreferrer">
                                        {intl.formatMessage({
                                            id: 'FOOTER_NAV_EVER_SCAN_LINK_TEXT',
                                        })}
                                    </a>
                                </li>
                                <li>
                                    <a href="https://wrappedever.io" target="_blank" rel="noopener noreferrer">
                                        {intl.formatMessage({
                                            id: 'FOOTER_NAV_WEVER_LINK_TEXT',
                                        })}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://l1.broxus.com/everscale/wallet"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {intl.formatMessage({
                                            id: 'FOOTER_NAV_EVER_WALLET_LINK_TEXT',
                                        })}
                                    </a>
                                </li>
                                <li>
                                    <a href="https://everpools.io" target="_blank" rel="noopener noreferrer">
                                        {intl.formatMessage({
                                            id: 'FOOTER_NAV_EVER_POOLS_LINK_TEXT',
                                        })}
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-nav__col">
                            <div className="footer-nav__col-title">
                                {intl.formatMessage({
                                    id: 'FOOTER_NAV_HEADER_FAQ',
                                })}
                            </div>
                            <ul className="footer-nav__list">
                                <li>
                                    <a href="https://docs.everwallet.net/" target="_blank" rel="noopener noreferrer">
                                        {intl.formatMessage({
                                            id: 'FOOTER_NAV_EVER_WALLET_MANUAL_LINK_TEXT',
                                        })}
                                    </a>
                                </li>
                                <li>
                                    <a href="https://docs.everwallet.net/concepts/ever-and-wever" target="_blank" rel="noopener noreferrer">
                                        {intl.formatMessage({
                                            id: 'FOOTER_NAV_WHAT_IS_WEVER_LINK_TEXT',
                                        })}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="footer__right">
                        {toolbar}
                    </div>
                </div>
                <div className="footer__bottom">
                    <ul className="footer-soc">
                        <li>
                            <a
                                href="https://t.me/DexadaCommunity"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Telegram"
                            >
                                <Icon icon="telegram" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://twitter.com/Dexada_io"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Twitter"
                            >
                                <Icon icon="twitter" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/broxus"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="GitHub"
                            >
                                <Icon icon="github" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.youtube.com/channel/UC3xAdlyTH0zbDNDRd3zhVlg"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="YouTube"
                            >
                                <Icon icon="youtube" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://medium.com/dexada"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Medium"
                            >
                                <Icon icon="medium" />
                            </a>
                        </li>
                    </ul>
                    <div className="footer__sub">
                        <p
                            className="footer-copyright"
                            dangerouslySetInnerHTML={{
                                __html: intl.formatMessage({
                                    id: 'FOOTER_COPYRIGHTS',
                                }, {
                                    year: new Date().getFullYear(),
                                }, {
                                    ignoreTag: true,
                                }),
                            }}
                        />
                        <nav className="footer-subnav">
                            <ul>
                                <li>
                                    <a
                                        href={TermsOfUse}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {intl.formatMessage({
                                            id: 'FOOTER_TERMS_OF_USE_LINK_TEXT',
                                        })}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={PrivacyPolicyPdf}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {intl.formatMessage({
                                            id: 'FOOTER_PRIVACY_POLICY_LINK_TEXT',
                                        })}
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    )
}
