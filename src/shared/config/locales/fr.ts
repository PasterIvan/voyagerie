import { LocaleObject } from "./model";

export const fr: LocaleObject = {
  pages: {
    main: {
      slogan: {
        line1: { text1: "Nous offrons", text2: "les meilleurs prix" },
        line2: {
          text1: "et",
          text2: "support complet",
        },
        line3: "par des routes luxueuses.",
      },
      chooseCountryText: "Choisissez le pays:",
      supportText: {
        line1: "Êtes-vous confus?",
        line2: "Appelez-nous",
      },
    },
    place: {
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
  },
  currencyConfig: {
    locale: "fr-FR",
    currency: "EUR",
  },
};
