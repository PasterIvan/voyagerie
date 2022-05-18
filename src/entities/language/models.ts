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

export const $currentLanguage = createStore<LanguageType>(
  config.defaultLanguage
).on(switchLanguage, (_, language) => language);

export const events = {
  switchLanguage,
};
