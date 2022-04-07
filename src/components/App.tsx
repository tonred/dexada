import * as React from 'react'
import {IntlProvider} from 'react-intl'
import {
    Redirect,
    Route,
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom'
import { Observer, observer } from 'mobx-react-lite'
import {Helmet} from "react-helmet";

import { Footer } from '@/components/layout/Footer'
import { TokensUpgradeModal } from '@/components/common/TokensUpgradeModal'
import { WalletConnectingModal } from '@/components/common/WalletConnectingModal'
import { WalletUpdateModal } from '@/components/common/WalletUpdateModal'
import { Header } from '@/components/layout/Header'
import { messages } from '@/i18n/messages'
import { Account } from '@/modules/Account'
import Farming from '@/pages/farming'
import FarmingItem from '@/pages/farming/item'
import CreateFarmPool from '@/pages/farming/create'
import Pairs from '@/pages/pairs'
import Pair from '@/pages/pairs/item'
import AddLiquidityPool from '@/pages/pool'
import Swap from '@/pages/swap'
import Tokens from '@/pages/tokens'
import Token from '@/pages/tokens/item'
import Pools from '@/pages/pools'
import Pool from '@/pages/pools/item'
import BurnLiquidity from '@/pages/pools/burn-liquidity'
import { appRoutes } from '@/routes'
import { useUpgradeTokens } from '@/stores/UpgradeTokens'
import { useWallet } from '@/stores/WalletService'
import { noop } from '@/utils'
import './App.scss'
import { LOCALES } from '@/i18n/locales'
import { useLanguage } from '@/hooks/useLanguage'

import Languages from './layout/Languages'


// @ts-ignore
import ogImg from '../../public/OG - Dexada-Kor.jpg'

function App(): JSX.Element {
    const wallet = useWallet()
    const upgradeTokens = useUpgradeTokens()

    const { langStore } = useLanguage()

    return (
        <IntlProvider
            key="intl"
            locale={LOCALES[langStore.language]}
            defaultLocale={LOCALES.en}
            messages={messages[LOCALES[langStore.language]]}
            onError={noop}
        >
            <Helmet>
                <meta property="og.title" content="탈중앙화 거래소, 유동성 풀, 파밍, 베스팅 I DEXADA" />
                <meta property="og.description" content="에버스케일 기반의 탈중앙화 거래소 및 파밍 허브. 가상자산을 환전하고 다양한 파밍 및 베스팅의 기회를 확보하세요." />
                <meta property="og.image" content={ogImg} />
            </Helmet>
            <Router>
                <div className="wrapper">
                    <Header key="header" />
                    <main className="main">
                        <Switch>
                            <Route exact path="/">
                                <Redirect exact to={appRoutes.swap.makeUrl()} />
                            </Route>

                            <Route path={appRoutes.swap.path}>
                                <Swap />
                            </Route>

                            <Route exact path={appRoutes.poolList.path}>
                                <Pools />
                            </Route>
                            <Route
                                exact
                                path={appRoutes.poolRemoveLiquidity.path}
                            >
                                <BurnLiquidity />
                            </Route>
                            <Route exact path={appRoutes.poolItem.path}>
                                <Pool />
                            </Route>
                            <Route exact path={appRoutes.poolCreate.path}>
                                <AddLiquidityPool />
                            </Route>

                            <Route exact path={appRoutes.tokenList.path}>
                                <Tokens />
                            </Route>
                            <Route exact path={appRoutes.tokenItem.path}>
                                <Token />
                            </Route>

                            <Route exact path={appRoutes.pairList.path}>
                                <Pairs />
                            </Route>
                            <Route exact path={appRoutes.pairItem.path}>
                                <Pair />
                            </Route>

                            <Route exact path={appRoutes.farming.path}>
                                <Farming />
                            </Route>
                            <Route exact path={appRoutes.farmingCreate.path}>
                                <CreateFarmPool />
                            </Route>
                            <Route exact path={appRoutes.farmingItem.path}>
                                <FarmingItem />
                            </Route>
                        </Switch>
                    </main>
                    <Footer key="footer" />
                </div>
                <div className="wallets">
                    <div className="desktop-languages">
                        <Languages />
                    </div>
                    <Account key="account" />
                </div>
                <WalletConnectingModal />
                <Observer>
                    {() => (
                        <>
                            {wallet.isInitialized && wallet.isOutdated ? (
                                <WalletUpdateModal />
                            ) : null}

                            {upgradeTokens.hasTokensToUpgrade ? (
                                <TokensUpgradeModal />
                            ) : null}
                        </>
                    )}
                </Observer>
            </Router>
        </IntlProvider>
    )
}

export default observer(App)
