export const EMAIL = "info@voyagerie.travel";
export const PHONE = "+7 495 555 55 55";
export const ADDRESS = 'ООО "Вояжери", Москва, ул. Маломосковская, 14';

export const Locales = ["ru", "en"] as const;
export const defaultLocale: typeof Locales[number] = "ru";

export enum RoutesPaths {
  Main = "/",
  Location = "/location",
  Place = "/place",
  Help = "/help",
}
