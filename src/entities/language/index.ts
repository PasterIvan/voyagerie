import config from "./config";
import { $currentLanguage, events } from "./models";

export const switchLanguagesConfig = {
  ...config,
};

export const switchLanguagesModel = {
  $currentLanguage,
  events,
};
