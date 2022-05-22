import { PlaceType } from "entities/location/models";
import { activeLocales, RoutesPaths } from "../constants";

export type LocaleObject = {
  pages: {
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
        time: Record<PlaceType["timeType"], string>;
      };
      suggestion: string;
      button: string;
    };
    place: {
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
  currencyConfig: {
    locale: string;
    currency: string;
  };
  navbarRoutes: { [Key in RoutesPaths]?: string };
};

export type LocalesType = typeof activeLocales[number];
