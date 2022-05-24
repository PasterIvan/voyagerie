import { RoutesPaths } from "../constants";
import { LocaleObject } from "./model";

export const de: LocaleObject = {
  pages: {
    p404: {
      label: "Seite nicht gefunden",
    },
    p500: {
      label: "Serverfehler",
    },
    main: {
      name: "Startseite",
      button: "Anfrage senden",
      chooseCountryText: "Wählen Sie Ihr Land",
      supportText: {
        line1: "Sind Sie verwirrt?",
        line2: "Rufen Sie uns an",
      },
    },
    location: {
      name: "Länder",
      title: {
        text1: "Wir haben",
        insert: "von",
        text2: "die besten",
      },
      hotelsPlural: ["hotel", "hotels", "hotels"],
      search: { placeholder: "Suche nach Hotelname" },
      card: {
        transfer: "Transfer",
        time: {
          minutes: "minuten",
          hours: "stunden",
          days: "tage",
          nights: "nächte",
          weeks: "wochen",
        },
      },
      suggestion:
        "Wenn das Hotel, das Sie suchen, nicht in der Liste ist, schreiben Sie uns und wir werden Ihnen einen Vorschlag machen.",
      button: "Kontaktieren Sie uns",
    },
    place: {
      button: "Wählen Sie einen Zimmertyp in diesem Hotel",
      name: "Hotels",
      labels: {
        name: "Hotel",
        restuartants: "Restaurants",
        health: "Sport und Gesundheit",
        children: "Für Kinder",
        galery: "Fotos des Hotels",
      },
    },
    form: {
      orderText: "Auswahl des Hotels",
      chooseRoom: {
        choose: "Wählen",
        choosed: "Ausgewählt",
      },
      labels: {
        chooseRoom: "Wählen Sie einen passenden Raum für Sie",
        choosed: "Sie haben ausgewählt",
        date: "Datum der Reise",
        guestNumber: "Anzahl der Gäste",
        comments: "Kommentare",
        foodType: "Essensart",
        contacts: "Kontaktinformationen",
      },
      datePicker: {
        arraive: "Anreise",
        departure: "Abreise",
        suggestTickets: "Flugoptionen vorschlagen",
      },
      guestNumbers: {
        adults: "Erwachsene",
        childs: "Kinder",
        child: "Kind",
        childSuggestion: "Geben Sie das Alter jedes Kindes ein",
      },
      foodType: {
        accommodationOnly: "Nur Hotel",
        breakfastOnly: "Nur Frühstück",
        halfBoard: "Halb Frühstück",
        fullBoard: "Voll Frühstück",
      },
      placeholders: {
        comment:
          "Senden Sie zum Beispiel bitte nur Preise mit Halbpension und Frühstück.\nZum Beispiel nur Direktflüge, Business Class.",
        contacts: "Geben Sie Ihre Kontaktinformationen ein",
      },
      buttons: {
        order: "Anfrage senden",
        back: "Zurück",
      },
      resultModal: {
        title: "Ihre Anfrage wurde erfolgreich versendet",
        sended: "Ihre Anfrage wurde erfolgreich versendet",
      },
    },
  },
  questionarie: {
    label: "Geben Sie die Details der geplanten Reise ein",
  },
  footer: {
    languages: "Sprachen",
    navigation: "Navigation",
    rightsReserved: "Alle Rechte vorbehalten",
  },
  currencyConfig: {
    locale: "de-DE",
    currency: "EUR",
  },
  navbarRoutes: {
    [RoutesPaths.Main]: "Startseite",
    [RoutesPaths.Location]: "Länder",
    [RoutesPaths.Help]: "Kontakt",
  },
  moneyFrom: "ab",
};
