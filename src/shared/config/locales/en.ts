import { RoutesPaths } from "../constants";
import { LocaleObject } from "./model";

export const en: LocaleObject = {
  pages: {
    main: {
      slogan: {
        line1: { text1: "Best prices", text2: "and full" },
        line2: {
          text1: "support",
          text2: "by luxury",
        },
        line3: "by luxury routes.",
      },
      chooseCountryText: "Choose your country",
      supportText: {
        line1: "Are you confused?",
        line2: "Call us",
      },
    },
    place: {
      title: {
        text1: "We have",
        insert: "from",
        text2: "the best",
      },
      hotelsPlural: ["hotel", "hotels", "hotels"],
      search: { placeholder: "Search by name" },
      card: {
        transfer: "Transfer",
        time: {
          minutes: "minutes",
          hours: "hours",
          days: "days",
          nights: "nights",
          weeks: "weeks",
        },
      },
      suggestion:
        "If the hotel you are looking for is not in the list, write to us and we will make you a proposal.",
      button: "Contact us",
    },
    hostel: {
      restuartants: "Restaurants",
      health: "Health and wellness",
      children: "For children",
      galery: "Hotel photos",
    },
  },
  currencyConfig: {
    locale: "en-US",
    currency: "USD",
  },
  navbarRoutes: {
    [RoutesPaths.Main]: "Home",
    [RoutesPaths.Place]: "Countries",
    [RoutesPaths.Help]: "Help",
  },
};
