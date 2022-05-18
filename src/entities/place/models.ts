import { createEvent, createStore } from "effector";
import { placesMock } from "shared/api/hotelsMock";
import { LocalesType } from "shared/config/locales/model";

export type ResidenceType = {
  id: string;
  name: Record<string, string>;
  image: string;
  price: number;
  description: Record<string, string>;
};

export type PlaceOverviewType = {
  residences: ResidenceType[];
  slug: string;
  locationSlug: string;
  image: string;
  name: Record<string, string>;
  location: Record<string, string>;
  description: Record<string, string>;
  countryCode: string;
  content: {
    restorans: Record<string, string>;
    health: Record<string, string>;
    child: Record<string, string>;
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
