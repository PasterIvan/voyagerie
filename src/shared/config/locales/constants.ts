import { AGE_OF_MAJORITY, MIN_CHILD_AGE } from "../constants";

export const ordinalNumbers = {
  ru: [
    "первый",
    "второй",
    "третий",
    "четвертый",
    "пятый",
    "шестой",
    "седьмой",
    "восьмой",
    "девятый",
    "десятый",
  ],
  en: [
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
    "seventh",
    "eighth",
    "ninth",
    "tenth",
  ],
  de: [
    "erster",
    "zweiter",
    "dritter",
    "vierter",
    "fünfter",
    "sechster",
    "siebter",
    "achtter",
    "neunter",
    "zehner",
  ],
  fr: [
    "premier",
    "deuxième",
    "troisième",
    "quatrième",
    "cinquième",
    "sixième",
    "septième",
    "huitième",
    "neuvième",
    "dixième",
  ],
} as const;

export const formErrorsConfig = {
  dateFrom: {
    "date-from-validation": {
      ru: "Неккоректное значение даты вылета",
      en: "Incorrect value of departure date",
      de: "Falscher Wert der Abflugdatum",
      fr: "Valeur incorrecte de la date de départ",
    },
  },
  dateTo: {
    "date-to-validation": {
      ru: "Неккоректное значение даты прилета",
      en: "Incorrect value of arrival date",
      de: "Falscher Wert der Ankunftsdatum",
      fr: "Valeur incorrecte de la date d'arrivée",
    },
  },
  adultsCount: {
    "adults-count": {
      ru: "Количество пассажиров должно быть больше 0",
      en: "Number of passengers should be more than 0",
      de: "Die Anzahl der Passagiere muss größer als 0 sein",
      fr: "Le nombre de passagers doit être supérieur à 0",
    },
  },
  childCount: {
    "child-count": {
      ru: "Неккоректное количество детей",
      en: "Incorrect number of children",
      de: "Falsche Anzahl der Kinder",
      fr: "Nombre incorrect de enfants",
    },
  },
  foodType: {
    "food-type": {
      ru: "Питание выбрано некорректно",
      en: "Food type is selected incorrectly",
      de: "Die Essensart wurde falsch ausgewählt",
      fr: "Le type de nourriture est sélectionné incorrectement",
    },
  },
  ages: {
    "min-ages-valid": {
      ru: `Возраст детей не может быть меньше ${MIN_CHILD_AGE}`,
      en: `Children's age should be more than ${MIN_CHILD_AGE}`,
      de: `Die Altersangabe für Kinder darf nicht kleiner als ${MIN_CHILD_AGE} sein`,
      fr: `L'âge des enfants ne peut pas être inférieur à ${MIN_CHILD_AGE}`,
    },
    "max-ages-valid": {
      ru: `Возраст детей не может быть больше ${AGE_OF_MAJORITY}`,
      en: `Children's age should be less than ${AGE_OF_MAJORITY}`,
      de: `Die Altersangabe für Kinder darf nicht größer als ${AGE_OF_MAJORITY} sein`,
      fr: `L'âge des enfants ne peut pas être supérieur à ${AGE_OF_MAJORITY}`,
    },
    "ages-filled": {
      ru: "Не все возрасты введены",
      en: "Not all ages are filled",
      de: "Nicht alle Altersangaben ausgefüllt",
      fr: "Aucun âge n'est rempli",
    },
  },
  contacts: {
    "contacts-required": {
      ru: "Контакты обязательны к заполнению",
      en: "Contacts are required to fill",
      de: "Kontakte sind erforderlich zu füllen",
      fr: "Les contacts sont obligatoires à remplir",
    },
  },
} as const;

export const pluralConfig = {
  ru: {
    minutes: ["минут", "минуты", "минут"],
    hours: ["часов", "часа", "часов"],
    days: ["день", "дня", "дней"],
    nights: ["ночь", "ночи", "ночей"],
    weeks: ["неделя", "недели", "недель"],
  },
  en: {
    minutes: ["minute", "minutes", "minutes"],
    hours: ["hour", "hours", "hours"],
    days: ["day", "days", "days"],
    nights: ["night", "nights", "nights"],
    weeks: ["week", "weeks", "weeks"],
  },
  fr: {
    minutes: ["minute", "minutes", "minutes"],
    hours: ["heure", "heures", "heures"],
    days: ["jour", "jours", "jours"],
    nights: ["nuit", "nuits", "nuits"],
    weeks: ["semaine", "semaines", "semaines"],
  },
  de: {
    minutes: ["Minute", "Minuten", "Minuten"],
    hours: ["Stunde", "Stunden", "Stunden"],
    days: ["Tag", "Tage", "Tage"],
    nights: ["Nacht", "Nächte", "Nächte"],
    weeks: ["Woche", "Wochen", "Wochen"],
  },
} as const;
