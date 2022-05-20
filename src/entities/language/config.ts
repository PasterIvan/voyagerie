import {
  defaultLocale,
  activeLocales,
  localesConfig,
} from "shared/config/constants";
import { LocalesType } from "shared/config/locales/model";
import { LanguageType } from "./models";

const userLocale = navigator.language.split(
  "-"
)[0] as typeof activeLocales[number];

const LANGUAGES: LanguageType[] = localesConfig.filter(({ key }) =>
  activeLocales.includes(key as LocalesType)
) as LanguageType[];

const DEFAULT_LANGUAGE: LanguageType =
  LANGUAGES.find((language) => language.key === userLocale) ||
  LANGUAGES.find((language) => language.key === defaultLocale) ||
  LANGUAGES[0];

const options = {
  languages: LANGUAGES,
  defaultLanguage: DEFAULT_LANGUAGE,
};

export default options;
