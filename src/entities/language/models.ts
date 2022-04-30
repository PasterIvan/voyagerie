import { createEvent, createStore } from "effector";
import config from "./config";

export type LanguageType = {
  label: string;
  short: string;
  code: string;
};

const switchLanguage = createEvent<LanguageType>();

export const $currentLanguage = createStore<LanguageType>(
  config.defaultLanguage
).on(switchLanguage, (_, language) => language);

export const events = {
  switchLanguage,
};
