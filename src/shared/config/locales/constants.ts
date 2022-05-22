import { FormType } from "pages/FormPage/models";
import { LocalesType } from "./model";

export const ordinalNumbers: { [K in LocalesType]: string[] } & Record<
  string,
  string[]
> = {
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
};

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
    "ages-valid": {
      ru: "Неккоректный возраст детей",
      en: "Incorrect age of children",
      de: "Falsche Altersangabe",
      fr: "Âge incorrect des enfants",
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
