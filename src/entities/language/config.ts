import { LanguageType } from "./models";

const LANGUAGES: LanguageType[] = [
  { label: "English", short: "Eng", code: "US" },
  { label: "Deutsche", short: "Deu", code: "DE" },
  { label: "Русский", short: "Рус", code: "RU" },
  { label: "Française", short: "Fr", code: "FR" },
];

const DEFAULT_LANGUAGE: LanguageType = LANGUAGES[2];

const options = {
  languages: LANGUAGES,
  defaultLanguage: DEFAULT_LANGUAGE,
};

export default options;
