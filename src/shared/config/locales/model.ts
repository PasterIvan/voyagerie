import { HotelType } from "entities/hostels/models";
import { RoutesPaths } from "../constants";

export type LocaleObject = {
  pages: {
    main: {
      name: string;
      slogan: {
        line1: { text1: string; text2: string };
        line2: {
          text1: string;
          text2: string;
        };
        line3: string;
      };
      chooseCountryText: string;
      button: string;
      supportText: {
        line1: string;
        line2: string;
      };
    };
    place: {
      name: string;
      title: { text1: string; insert: string; text2: string };
      hotelsPlural: [string, string, string];
      search: { placeholder: string };
      card: {
        transfer: string;
        time: Record<HotelType["timeType"], string>;
      };
      suggestion: string;
      button: string;
    };
    hostel: {
      name: string;
      restuartants: string;
      health: string;
      children: string;
      galery: string;
    };
  };
  currencyConfig: {
    locale: string;
    currency: string;
  };
  navbarRoutes: { [Key in RoutesPaths]?: string };
};
