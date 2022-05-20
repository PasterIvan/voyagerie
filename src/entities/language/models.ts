import { createEvent, createStore } from "effector";
import { LocalesType } from "shared/config/locales/model";
import config from "./config";

export type LanguageType = {
  label: string;
  short: string;
  code: string;
  key: LocalesType;
};

const switchLanguage = createEvent<LanguageType>();
const findLanguage = createEvent<string | undefined>();

export const $currentLanguage = createStore<LanguageType>(
  config.defaultLanguage
)
  .on(switchLanguage, (_, language) => language)
  .on(findLanguage, (_, targetKey) => {
    const language = config.languages.find((l) => l.key === targetKey);
    return language || config.defaultLanguage;
  });

export const events = {
  switchLanguage,
  findLanguage,
};
