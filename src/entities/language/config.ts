import { defaultLocale, activeLocales } from "shared/config/constants";
import { LocalesType } from "shared/config/locales/model";
import { LanguageType } from "./models";

const LANGUAGES: LanguageType[] = (
  [
    { label: "English", short: "Eng", code: "US", key: "en" },
    { label: "Deutsche", short: "Deu", code: "DE", key: "de" },
    { label: "Русский", short: "Рус", code: "RU", key: "ru" },
    { label: "Française", short: "Fr", code: "FR", key: "fr" },
  ] as const
).filter(({ key }) =>
  activeLocales.includes(key as LocalesType)
) as LanguageType[];

const DEFAULT_LANGUAGE: LanguageType =
  LANGUAGES.find((language) => language.key === defaultLocale) || LANGUAGES[0];

const options = {
  languages: LANGUAGES,
  defaultLanguage: DEFAULT_LANGUAGE,
};

export default options;
