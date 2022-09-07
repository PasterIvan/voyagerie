import { activeLocales, RoutesPaths } from "../constants";

export type LocaleObject = {
  pages: {
    p404: {
      label: string;
    };
    p500: {
      label: string;
    };
    main: {
      name: string;
      chooseCountryText: string;
      button: string;
      supportText: {
        line1: string;
        line2: string;
      };
    };
    location: {
      name: string;
      title: { text1: string; insert: string; text2: string };
      hotelsPlural: [string, string, string];
      search: { placeholder: string };
      card: {
        transfer: string;
        time: Record<"minutes" | "hours" | "days" | "nights" | "weeks", string>;
      };
      suggestion: string;
      button: string;
    };
    place: {
      button: string;
      disabledButton: string;
      name: string;
      labels: {
        name: string;
        restuartants: string;
        health: string;
        children: string;
        galery: string;
      };
    };
    form: {
      orderText: string;
      chooseRoom: {
        choose: string;
        choosed: string;
      };
      labels: {
        chooseRoom: string;
        choosed: string;
        date: string;
        guestNumber: string;
        foodType: string;
        comments: string;
        contacts: string;
        info: string
      };
      datePicker: {
        arraive: string;
        departure: string;
        suggestTickets: string;
      };
      guestNumbers: {
        adults: string;
        childs: string;
        child: string;
        childSuggestion: string;
      };
      foodType: {
        accommodationOnly: string;
        breakfastOnly: string;
        halfBoard: string;
        fullBoard: string;
      };
      placeholders: {
        comment: string;
        contacts: string;
      };
      buttons: {
        order: string;
        back: string;
      };
      resultModal: {
        title: string;
        sended: string;
      };
    };
  };
  questionarie: {
    label: string;
  };
  footer: {
    navigation: string;
    languages: string;
    rightsReserved: string;
    processingPolicy: string;
    publicContract: string;
  };
  currencyConfig: {
    locale: string;
    currency: string;
  };
  toasts: {
    sendServerError: string;
  };
  navbarRoutes: { [Key in RoutesPaths]?: string };
  moneyFrom: string;
  noData: string;
  notFound: string;
  pleaseFillInput: string;
};

export type LocalesType = typeof activeLocales[number];
