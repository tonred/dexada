import { LangEnum } from "@/constants";

import { LOCALES } from './locales'
import enLocale from '../lang/en'
import koLocale from '../lang/ko'
import jaLocale from '../lang/ja'
import arLocale from '../lang/ar'


export const messages = {
    [LOCALES[LangEnum.en]]: enLocale,
    [LOCALES[LangEnum.ko]]: koLocale,
    [LOCALES[LangEnum.ja]]: jaLocale,
    [LOCALES[LangEnum.ar]]: arLocale,
}
