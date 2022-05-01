import { LocaleObject } from "./model";

export const en: LocaleObject = {
  pages: {
    main: {
      slogan: {
        line1: { text1: "We offer", text2: "the best prices" },
        line2: {
          text1: "and",
          text2: "full support",
        },
        line3: "by luxury routes.",
      },
      chooseCountryText: "Choose country:",
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
    },
  },
  currencyConfig: {
    locale: "en-US",
    currency: "USD",
  },
};
