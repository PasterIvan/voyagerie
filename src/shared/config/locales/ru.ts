import { LocaleObject } from "./model";

export const ru: LocaleObject = {
  pages: {
    main: {
      slogan: {
        line1: { text1: "Мы предлагаем", text2: "лучшие цены" },
        line2: {
          text1: "и",
          text2: "полное сопровождение",
        },
        line3: "по люксовым направлениям.",
      },
      chooseCountryText: "Выберите страну:",
      supportText: {
        line1: "Сомневаетесь?",
        line2: "Позвоните нам",
      },
    },
    place: {
      title: {
        text1: "Мы отобрали",
        insert: "из",
        text2: "самые лучшие",
      },
      hotelsPlural: ["отель", "отеля", "отелей"],
      search: { placeholder: "Поиск по названию" },
      card: {
        transfer: "Трансфер",
        time: {
          minutes: "минут",
          hours: "часов",
          days: "дней",
          nights: "ночей",
          weeks: "недель",
        },
      },
      suggestion:
        "Если отеля, который вы ищете нет в списке, напишите нам, и мы сделаем вам предложение.",
      button: "Свяжитесь с нами",
    },
    hostel: {
      restuartants: "Рестораны",
      health: "Спорт и оздоровление",
      children: "Для детей",
    },
  },
  currencyConfig: {
    locale: "ru-RU",
    currency: "RUB",
  },
};
