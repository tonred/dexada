import { FormatNumberOptions } from 'react-intl'

import { DexConstants } from '@/misc/dex-constants'

export const API_URL = 'https://ton-swap-indexer.broxus.com/v1'
export const FARMING_POOL_API_URL = 'https://farming-pool-indexer.broxus.com/v1'

export const CURRENCY_OPTIONS: FormatNumberOptions = {
    currency: 'USD',
    style: 'currency',
}

export const CROSS_PAIR_EXCHANGE_WHITE_LIST = [
    DexConstants.WEVERRootAddress.toString(),
    DexConstants.USDTRootAddress.toString(),
    DexConstants.USDCRootAddress.toString(),
]

export const SECONDS_IN_DAY = 86400

export enum LangEnum {
    en = 'en',
    ja = 'ja',
    ko = 'ko',
    ar = 'ar',
}

export const LANGUAGES = [{ key: LangEnum.ko , value: '한국어'},{ key: LangEnum.en, value:LangEnum.en }, {key: LangEnum.ja, value: '日本語'}, {key: LangEnum.ar, value: 'العربية'}];
