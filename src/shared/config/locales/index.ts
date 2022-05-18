import { LocaleObject, LocalesType } from "./model";
import { Locales } from "../constants";
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

export const locales: Record<LocalesType, LocaleObject> = Locales.reduce(
  (obj, key) => {
    obj[key] = config[key];

    return obj;
  },
  {} as Record<LocalesType, LocaleObject>
);
