import { useLanguageStore } from '@/stores/Languages';
import * as React from 'react'
import { LOCALES } from "@/i18n/locales";
import { Settings } from "luxon";

export function useLanguage() {
    const langStore = useLanguageStore();

    const setLanguage = (event: StorageEvent) => {
        if (event.key === "lang" && event.newValue) {
            langStore.setLanguage(event.newValue);
        }
    };

    React.useEffect(() => {
        window.addEventListener("storage", setLanguage);
        const storageLang = localStorage.getItem("lang");
        const browserLang = navigator.language.split(/[-_]/)[0];
        const isBrowserLangExists = LOCALES[browserLang] !== undefined;
        const defaultLang = isBrowserLangExists ? browserLang : LOCALES.ko;
        const language = !!storageLang ? storageLang : defaultLang;
        langStore.setLanguage(language);

        Settings.defaultLocale = language;

        return () => window.removeEventListener("storage", setLanguage);
    }, []);

    return {
        langStore
    }
}
