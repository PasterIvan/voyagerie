import { RoutesPaths } from "../constants";
import { LocaleObject } from "./model";

export const ru: LocaleObject = {
  pages: {
    p404: {
      label: "Страница не найдена",
    },
    p500: {
      label: "Ошибка на сервере",
    },
    main: {
      name: "Главная",
      button: "Оставить заявку",
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
      button: "Выбрать номер в этом отеле",
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
      orderText: "Выбор номера",
      chooseRoom: {
        choose: "Выбрать",
        choosed: "Выбрано",
      },
      labels: {
        chooseRoom: "Выберите подходящий для вас номер",
        choosed: "Вы выбрали",
        date: "Даты путешествия",
        guestNumber: "Количество гостей",
        comments: "Комментарии и пожелания",
        contacts: "Куда вам отправить предложение",
        foodType: "Тип питания",
      },
      buttons: {
        back: "Назад",
        order: "Отправить запрос",
      },
      datePicker: {
        arraive: "Заезд",
        departure: "Выезд",
        suggestTickets: "Предложить варианты авиабилетов",
      },
      foodType: {
        accommodationOnly: "Только проживание",
        breakfastOnly: "Только завтрак",
        halfBoard: "Полупитание",
        fullBoard: "Полное питание",
      },
      guestNumbers: {
        adults: "Взрослые",
        childs: "Дети",
        child: "Ребенок",
        childSuggestion: "Укажите возраст каждого из детей",
      },
      placeholders: {
        comment:
          "Например, пришлите пожалуйста, цены с полупансионом и только с завтраками.\nНапример, только прямые рейсы, бизнес-класс.",
        contacts: "Номер телефона, или Ватсап, или Телеграм",
      },
      resultModal: {
        title: "Спасибо. Наш менеджер скоро свяжется с вами!",
        sended: "Данные успешно отправлены",
      },
    },
  },
  questionarie: {
    label: "Заполните данные о планируемом путешествии",
  },
  footer: {
    languages: "Языки",
    navigation: "Навигация",
    rightsReserved: "Все права защищены",
    processingPolicy: "Политика обработки персональных данных",
    publicContract: "Публичный договор",
  },
  currencyConfig: {
    locale: "ru-RU",
    currency: "RUB",
  },
  navbarRoutes: {
    [RoutesPaths.Main]: "Главная",
    [RoutesPaths.Location]: "Cтраны",
    [RoutesPaths.Help]: "Контакты",
  },
  moneyFrom: "от",
  noData: "Нет данных для отображения",
  notFound: "Не найдено",
};
