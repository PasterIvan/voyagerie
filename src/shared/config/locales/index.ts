import { LocaleObject, LocalesType } from "./model";
import { activeLocales } from "../constants";
import { de } from "./de";
import { en } from "./en";
import { fr } from "./fr";
import { ru } from "./ru";

const config = {
  de,
  en,
  fr,
  ru,
};

export const locales: Record<LocalesType, LocaleObject> = activeLocales.reduce(
  (obj, key) => {
    obj[key] = config[key];

    return obj;
  },
  {} as Record<LocalesType, LocaleObject>
);
