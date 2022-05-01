import { HotelOverviewType } from "entities/hostels/models";
import image1 from "./image1.png";
import image2 from "./image2.png";
import image3 from "./image3.png";
import image4 from "./image4.png";

export const hotelsMock: HotelOverviewType = {
  slug: "maldives",
  image: image1,
  name: {
    ru: "Отель в городе Санкт-Петербург",
    en: "Hotel in St. Petersburg",
    de: "Hotel in St. Petersburg",
    fr: "Hotel in St. Petersburg",
  },
  place: {
    ru: "Мальдивы",
    en: "Maldives",
    de: "Maldives",
    fr: "Maldives",
  },
  description: {
    ru: "Первый отель бренда St.Regis на Мальдивах, St. Regis Maldives Vommuli Resort открылся в 2016 году. Он находится на собственном острове в атолле Даалу, в 45 минутах полета на гидроплане от международного аэропорта Мале. Площадь острова, на котором расположен отель – всего 9 гектаров.",
    en: "First hotel of St.Regis brand in Maldives, St. Regis Maldives Vommuli Resort opened in 2016. It is located on its own island in Dala at 45 minutes from the international airport of Mal. The total area of the island is 9 hectares.",
    de: "Erster Hotel der St.Regis Marke in Maldiven, St. Regis Maldives Vommuli Resort wurde im Jahr 2016 geöffnet. Es befindet sich auf einem eigenen Insel in Dala in 45 Minuten vom internationalen Flughafen von Mal. Die Gesamtfläche des Inseln beträgt 9 Hektar.",
    fr: "Premier hôtel de la marque St.Regis en Maldives, St. Regis Maldives Vommuli Resort a ouvert en 2016. Il est situé sur son propre île dans Dala à 45 minutes de l'aéroport international de Mal. La superficie totale de l'île est de 9 hectares.",
  },
  content: {
    restorans: {
      ru: "<p>Alba - ресторан итальянской и международной кухни. Открыт в течение всего дня.</p><p>Cargo - ресторан ближневосточной кухни.</p><p>Orientale - ресторан азиатской кухни.</p><p>Сrust & Craft - ресторан предлагает пиццу, сэндвичи, бургеры, такос и другие закуски.</p><p>Decanter - обширная коллекция вин. Дегустационное меню из пяти блюд.</p><p>The Whale Bar - бар над водой с фирменными коктейлями, широким выбором и видом на океан.</p>",
      en: "<p>Alba - Italian and international cuisine restaurant. Opened for the whole day.</p><p>Cargo - Seafood restaurant.</p><p>Orientale - Asian cuisine restaurant.</p><p>Crust & Craft - Pizza, sandwiches, burgers, takos and other snacks restaurant.</p><p>Decanter - a wide range of wines. A tasting menu from five dishes.</p><p>The Whale Bar - a bar over water with a famous brand cocktails, a wide selection and a view on the ocean.</p>",
      de: "<p>Alba - Italienische und internationale Küche. Öffnet sich für den ganzen Tag.</p><p>Cargo - Fischrestaurant.</p><p>Orientale - Asiatische Küche.</p><p>Crust & Craft - Pizza, Sandwiches, Burger, Takos und andere Gerichte.</p><p>Decanter - eine breite Auswahl von Weinen. Ein Getränkemenü von fünf Gerichten.</p><p>The Whale Bar - ein Bar über Wasser mit einem herstellbaren Brandkonzentrat, einer breiten Auswahl und einem Blick auf den Ozean.</p>",
      fr: "<p>Alba - restaurant italien et international de cuisine. Ouvert pour toute la journée.</p><p>Cargo - restaurant de poisson.</p><p>Orientale - restaurant asiatique.</p><p>Crust & Craft - pizza, sandwich, burgers, takos et autres plats.</p><p>Decanter - une large gamme de vins. Un menu de dégustation de cinq plats.</p><p>The Whale Bar - bar au-dessus de l'eau avec des cocktails de marque, une large sélection et une vue sur l'océan.</p>",
    },
    health: {
      ru: "<p>Фитнес-зал, пляж, инфинити-бассейн, центр водных видов спорта и дайвинга, теннисный корт.</p><p>Iridium Spa: сауна, парная, массажи, спа-процедуры по уходу за лицом и телом, йога.</p>",
      en: "<p>Fitness-center, beach, infiniti-pool, sports and diving center, tennis court.</p><p>Iridium Spa: sauna, parlor, massages, spa treatments for the face and body, yoga.</p>",
      de: "<p>Fitness-Center, Strand, Infiniti-Pool, Sport und Taucher-Center, Tennisschlachtfeld.</p><p>Iridium Spa: Sauna, Parlour, Massagen, Spa-Behandlungen für die Gesichts- und Körperbehandlung, Yoga.</p>",
      fr: "<p>Centre de fitness, plage, piscine infiniti, centre de sports et de plongée, terrain de tennis.</p><p>Iridium Spa: sauna, parlour, massages, spa treatments for the face and body, yoga.</p>",
    },
    child: {
      ru: "<p>Детские услуги в городе Санкт-Петербург</p>",
      en: "<p>Child services in St. Petersburg</p>",
      de: "<p>Kinderbetreuung in St. Petersburg</p>",
      fr: "<p>Services pour enfants à St. Petersburg</p>",
    },
  },
  gallery: [image2, image3, image4],
};
