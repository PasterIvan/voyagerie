import { LanguageType } from "./models";

const LANGUAGES: LanguageType[] = [
  { label: "English", short: "Eng", code: "US", key: "en" },
  { label: "Deutsche", short: "Deu", code: "DE", key: "de" },
  { label: "Русский", short: "Рус", code: "RU", key: "ru" },
  { label: "Française", short: "Fr", code: "FR", key: "fr" },
];

const DEFAULT_LANGUAGE: LanguageType = LANGUAGES[2];

const options = {
  languages: LANGUAGES,
  defaultLanguage: DEFAULT_LANGUAGE,
};

export default options;
