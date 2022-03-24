import { makeAutoObservable } from 'mobx';

export class LanguageStore {
    language = '';

    constructor () {
        makeAutoObservable(this);
    }

    public setLanguage(lang: string) {
        this.language = lang;
    }
}

const languageStore = new LanguageStore();

export const useLanguageStore = (): LanguageStore => languageStore;
