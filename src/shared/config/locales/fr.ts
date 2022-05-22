import { RoutesPaths } from "../constants";
import { LocaleObject } from "./model";

export const fr: LocaleObject = {
  pages: {
    main: {
      name: "Accueil",
      button: "Envoyer une demande",
      chooseCountryText: "Choisissez votre pays",
      supportText: {
        line1: "Êtes-vous confus?",
        line2: "Appelez-nous",
      },
    },
    location: {
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
    place: {
      name: "Hôtels",
      labels: {
        name: "Hôtel",
        restuartants: "Restaurants",
        health: "Sport et santé",
        children: "Pour les enfants",
        galery: "Galerie d'hôtel",
      },
    },
    form: {
      name: "Commande",
      orderText: "Choisissez une ville",
    },
  },
  currencyConfig: {
    locale: "fr-FR",
    currency: "EUR",
  },
  navbarRoutes: {
    [RoutesPaths.Main]: "Accueil",
    [RoutesPaths.Location]: "Pays",
    [RoutesPaths.Help]: "Contact",
  },
};
