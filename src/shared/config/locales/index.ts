import { LocaleObject } from "./model";
import { Locales } from "../constants";
import { de } from "./de";
import { en } from "./en";
import { fr } from "./fr";
import { ru } from "./ru";

export const locales: Record<Locales, LocaleObject> = {
  ru,
  en,
  fr,
  de,
};
