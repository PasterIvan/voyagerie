import { mainPageModel } from "pages/MainPage";
import { RoutesPaths } from "shared/config/constants";
import { footerModel } from "widgets/Footer";

export const navigateRoutesConfig: {
  key: RoutesPaths;
  route?: RoutesPaths;
  className?: string;
  onClick?: () => void;
}[] = [
  { key: RoutesPaths.Main, route: RoutesPaths.Main },
  {
    key: RoutesPaths.Location,
    route: RoutesPaths.Main,
    onClick: () => {
      mainPageModel.events.scrollToLocations();
    },
  },
  {
    key: RoutesPaths.Help,
    onClick: () => {
      footerModel.events.scrollToContacts();
    },
  },
];