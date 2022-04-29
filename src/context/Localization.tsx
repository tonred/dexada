import React from 'react'

import ar from '@/lang/ar'
import en from '@/lang/en'
import ja from '@/lang/ja'
import ko from '@/lang/ko'
import { storage } from '@/utils'

const messagesList = {
    ar,
    en,
    ja,
    ko,
} as const


export type Locale = keyof typeof messagesList

export type LocalizationKeys = { [T in keyof typeof ko]: string }

export type LocalizationContextProps = {
    locale: Locale;
    messages: LocalizationKeys;
    setLocale: React.Dispatch<React.SetStateAction<Locale>>;
}

export type Language = {
    code: Locale;
    dir?: 'ltr' | 'rtl';
    nativeLabel?: string;
}

export const LANGUAGES: Language[] = [
    { code: 'ko', nativeLabel: '한국어' },
    { code: 'en', nativeLabel: 'English' },
    { code: 'ja', nativeLabel: '日本語' },
    { code: 'ar', dir: 'rtl', nativeLabel: 'العربية' },
]

export const LocalizationContext = React.createContext<LocalizationContextProps>({
    locale: 'ko',
    messages: messagesList.ko,
    setLocale() {},
})

type Props = {
    children: React.ReactNode | React.ReactNode[]
}

export function LocalizationProvider({ children }: Props): JSX.Element {
    const [locale, setLocale] = React.useState<Locale>(() => {
        const storedLocale = storage.get('lang') as Locale
        const supports = Object.keys(messagesList).includes(storedLocale)
        return supports ? storedLocale : 'ko'
    })

    const messages = React.useMemo<LocalizationKeys>(
        () => messagesList[locale],
        [locale],
    )

    const context = React.useMemo(() => ({
        locale,
        messages,
        setLocale,
    }), [locale, messages])

    const onChangeStorageValue = (event: StorageEvent) => {
        if (event.key === 'lang' && event.newValue != null) {
            setLocale(event.newValue as Locale)
        }
    }

    React.useEffect(() => {
        try {
            document.documentElement.setAttribute('lang', locale)
            if (locale === 'ar') {
                document.documentElement.setAttribute('dir', 'rtl')
            }
            else {
                document.documentElement.setAttribute('dir', 'ltr')
            }
        }
        catch (e) {}

        window.addEventListener('storage', onChangeStorageValue)

        return () => {
            window.removeEventListener('storage', onChangeStorageValue)
        }
    }, [locale])

    return (
        <LocalizationContext.Provider value={context}>
            {children}
        </LocalizationContext.Provider>
    )
}
