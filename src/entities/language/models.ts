import { createEvent, createStore } from "effector";
import { Locales } from "shared/config/constants";
import config from "./config";

export type LanguageType = {
  label: string;
  short: string;
  code: string;
  key: Locales;
};

const switchLanguage = createEvent<LanguageType>();

export const $currentLanguage = createStore<LanguageType>(
  config.defaultLanguage
).on(switchLanguage, (_, language) => language);

export const events = {
  switchLanguage,
};
