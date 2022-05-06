import { createEvent, createStore } from "effector";
import { placesMock } from "shared/api/hotelsMock";
import { Locales } from "shared/config/constants";

export type ResidenceType = {
  id: string;
  name: Record<Locales, string>;
  image: string;
  price: number;
  description: Record<Locales, string>;
};

export type PlaceOverviewType = {
  residences: ResidenceType[];
  slug: string;
  locationSlug: string;
  image: string;
  name: Record<Locales, string>;
  location: Record<Locales, string>;
  description: Record<Locales, string>;
  countryCode: string;
  content: {
    restorans: Record<Locales, string>;
    health: Record<Locales, string>;
    child: Record<Locales, string>;
  };
  gallery: string[];
};

const setPlace = createEvent<PlaceOverviewType>();

export const $place = createStore<PlaceOverviewType | null>(null).on(
  setPlace,
  (_, place) => place
);

//TODO: Dev only
setPlace(placesMock);

export const events = {
  setPlace,
};
