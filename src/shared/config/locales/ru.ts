import { RoutesPaths } from "../constants";
import { LocaleObject } from "./model";

export const ru: LocaleObject = {
  pages: {
    main: {
      name: "Главная",
      button: "Оставить заявку",
      slogan: {
        line1: { text1: "Лучшие цены", text2: "и полное" },
        line2: {
          text1: "сопровождение",
          text2: "по люксовым",
        },
        line3: "направлениям",
      },
      chooseCountryText: "Выберите вашу страну",
      supportText: {
        line1: "Сомневаетесь?",
        line2: "Позвоните нам",
      },
    },
    location: {
      name: "Страны",
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
    place: {
      name: "Отели",
      labels: {
        name: "Про отель",
        restuartants: "Рестораны",
        health: "Спорт и оздоровление",
        children: "Для детей",
        galery: "Фотографии отеля",
      },
    },
    form: {
      name: "Заказ",
      orderText: "Выбор параметров",
    },
  },
  currencyConfig: {
    locale: "ru-RU",
    currency: "RUB",
  },
  navbarRoutes: {
    [RoutesPaths.Main]: "Главная",
    [RoutesPaths.Location]: "Cтраны",
    [RoutesPaths.Help]: "Помощь",
  },
};
