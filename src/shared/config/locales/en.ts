import { RoutesPaths } from "../constants";
import { LocaleObject } from "./model";

export const en: LocaleObject = {
  pages: {
    p404: {
      label: "Page not found",
    },
    p500: {
      label: "Server error",
    },
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
      button: "Choose a room in this hotel",
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
      orderText: "Choose a room",
      chooseRoom: {
        choose: "Choose",
        choosed: "Chosen",
      },
      labels: {
        chooseRoom: "Choose a room that suits you",
        choosed: "You have chosen",
        date: "Travel dates",
        guestNumber: "Number of guests",
        comments: "Comments and wishes",
        contacts: "Where to send the offer",
        foodType: "Food type",
      },
      buttons: {
        back: "Back",
        order: "Send request",
      },
      datePicker: {
        arraive: "Arraive",
        departure: "Departure",
        suggestTickets: "Suggest tickets",
      },
      foodType: {
        accommodationOnly: "Accommodation only",
        breakfastOnly: "Breakfast only",
        halfBoard: "Half board",
        fullBoard: "Full board",
      },
      guestNumbers: {
        adults: "Adults",
        childs: "Children",
        child: "Child",
        childSuggestion: "Enter the age of each child",
      },
      placeholders: {
        comment:
          "For example, please send prices with half board and breakfast only.\nFor example, only direct flights, business class.",
        contacts: "Phone number, or WhatsApp, or Telegram",
      },
      resultModal: {
        title: "Your request has been sent",
        sended: "We will contact you as soon as possible.",
      },
    },
  },
  questionarie: {
    label: "Fill in the details of the planned trip",
  },
  footer: {
    languages: "Languages",
    navigation: "Navigation",
    rightsReserved: "All rights reserved",
    processingPolicy: "Personal data processing policy",
    publicContract: "Public contract",
  },
  currencyConfig: {
    locale: "en-US",
    currency: "USD",
  },
  navbarRoutes: {
    [RoutesPaths.Main]: "Home",
    [RoutesPaths.Location]: "Countries",
    [RoutesPaths.Help]: "Contacts",
    [RoutesPaths.Refresh]: "Refresh page",
  },
  moneyFrom: "from",
  noData: "No data",
  notFound: "Not found",
};
