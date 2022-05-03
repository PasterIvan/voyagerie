import { RoutesPaths } from "../constants";
import { LocaleObject } from "./model";

export const fr: LocaleObject = {
  pages: {
    main: {
      name: "Accueil",
      button: "Envoyer une demande",
      slogan: {
        line1: { text1: "Les meilleurs prix", text2: "et plein" },
        line2: {
          text1: "d'assistance",
          text2: "par les hôtels luxueux",
        },

        line3: "par des routes luxueuses.",
      },
      chooseCountryText: "Choisissez votre pays",
      supportText: {
        line1: "Êtes-vous confus?",
        line2: "Appelez-nous",
      },
    },
    place: {
      name: "Pays",
      title: {
        text1: "Nous avons choisi",
        insert: "de",
        text2: "les meilleurs",
      },
      hotelsPlural: ["hôtel", "hôtels", "hôtels"],
      search: { placeholder: "Recherche par nom" },
      card: {
        transfer: "Transfert",
        time: {
          minutes: "minutes",
          hours: "heures",
          days: "jours",
          nights: "nuits",
          weeks: "semaines",
        },
      },
      suggestion:
        "Si l'hôtel que vous recherchez n'est pas dans la liste, écrivez-nous et nous vous proposerons une proposition.",
      button: "Contactez-nous",
    },
    hostel: {
      labels: {
        name: "Hôtel",
        restuartants: "Restaurants",
        health: "Sport et santé",
        children: "Pour les enfants",
        galery: "Galerie d'hôtel",
      },
    },
  },
  currencyConfig: {
    locale: "fr-FR",
    currency: "EUR",
  },
  navbarRoutes: {
    [RoutesPaths.Main]: "Accueil",
    [RoutesPaths.Place]: "Pays",
    [RoutesPaths.Help]: "Aide",
  },
};
