import { RoutesPaths } from "../constants";
import { LocaleObject } from "./model";

export const en: LocaleObject = {
  pages: {
    main: {
      name: "Main",
      button: "Leave a request",
      chooseCountryText: "Choose your country",
      supportText: {
        line1: "Are you confused?",
        line2: "Call us",
      },
    },
    location: {
      name: "Countries",
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
    place: {
      name: "Hotels",
      labels: {
        name: "Place",
        restuartants: "Restaurants",
        health: "Health and wellness",
        children: "For children",
        galery: "Hotel photos",
      },
    },
    form: {
      name: "Order",
      orderText: "Choose villa",
    },
  },
  currencyConfig: {
    locale: "en-US",
    currency: "USD",
  },
  navbarRoutes: {
    [RoutesPaths.Main]: "Home",
    [RoutesPaths.Location]: "Countries",
    [RoutesPaths.Help]: "Contact",
  },
};
