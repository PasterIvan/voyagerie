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
      orderText: "Choix du nombre",
      chooseRoom: {
        choose: "Choisir",
        choosed: "Choisi",
      },
      labels: {
        chooseRoom: "Choisissez le nombre de chambres approprié",
        choosed: "Vous avez choisi",
        date: "Les dates de voyage",
        guestNumber: "Nombre de voyageurs",
        foodType: "Type de repas",
        comments: "Commentaires",
        contacts: "Contacts",
      },
      datePicker: {
        arraive: "Date d'arrivée",
        departure: "Date de départ",
        suggestTickets: "Proposer des billets",
      },
      guestNumbers: {
        adults: "Adultes",
        childs: "Enfants",
        child: "Enfant",
        childSuggestion: "Entrez l'âge de chaque enfant",
      },
      foodType: {
        accommodationOnly: "Hébergement seulement",
        breakfastOnly: "Petit déjeuner seulement",
        halfBoard: "Demi-pension",
        fullBoard: "Pension complète",
      },
      placeholders: {
        comment:
          "Par exemple, veuillez envoyer les prix avec demi-pension et petit-déjeuner uniquement.\nPar exemple, uniquement les vols directs, classe affaires.",
        contacts: "Numéro de téléphone, ou WhatsApp, ou Telegram",
      },
      buttons: {
        order: "Envoyer la demande",
        back: "Retour",
      },
      resultModal: {
        title: "Votre demande a été envoyée",
        sended: "Merci pour votre demande.",
      },
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
