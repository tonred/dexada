import {LangEnum} from "@/constants";

type TLocales = {
    [key: string]: string;
};

export const LOCALES: TLocales = {
    en: LangEnum.en,
    ko: LangEnum.ko,
    ja: LangEnum.ja,
    ar: LangEnum.ar,
}
