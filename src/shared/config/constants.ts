import { LanguageType } from "entities/language/models";

export const EMAIL = "info@voyagerie.travel";
export const PHONE = "+7 495 555 55 55";
export const ADDRESS = 'ООО "Вояжери", Москва, ул. Маломосковская, 14';

export const activeLocales = ["ru", "en"] as const;
export const defaultLocale: typeof activeLocales[number] = activeLocales[1];

export const localesConfig: LanguageType[] = [
  { label: "English", short: "Eng", code: "US", key: "en" },
  { label: "Deutsche", short: "Deu", code: "DE", key: "de" },
  { label: "Русский", short: "Рус", code: "RU", key: "ru" },
  { label: "Française", short: "Fr", code: "FR", key: "fr" },
] as LanguageType[];

export enum RoutesPaths {
  Main = "/",
  Location = "/location",
  Place = "/place",
  Help = "/help",
}
