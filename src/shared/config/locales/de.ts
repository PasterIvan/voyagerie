import { RoutesPaths } from "../constants";
import { LocaleObject } from "./model";

export const de: LocaleObject = {
  pages: {
    main: {
      name: "Startseite",
      button: "Anfrage senden",
      slogan: {
        line1: { text1: "Beste Preise", text2: "und vollständig" },
        line2: {
          text1: "Unterstützung",
          text2: "für Luxus-Zimmer",
        },
        line3: "durch luxuriöse Routen.",
      },
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
      labels: {
        name: "Hotel",
        restuartants: "Restaurants",
        health: "Sport und Gesundheit",
        children: "Für Kinder",
        galery: "Fotos des Hotels",
      },
    },
  },
  currencyConfig: {
    locale: "de-DE",
    currency: "EUR",
  },
  navbarRoutes: {
    [RoutesPaths.Main]: "Startseite",
    [RoutesPaths.Location]: "Länder",
    [RoutesPaths.Help]: "Hilfe",
  },
};
