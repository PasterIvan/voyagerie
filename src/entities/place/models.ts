import { createEvent, createStore } from "effector";
import { hotelsMock } from "shared/api/hotelsMock";
import { Locales } from "shared/config/constants";

export type PlaceType = {
  image: string;
  name: Record<Locales, string>;
  transferType: "air" | "water" | "air-water";
  time: number;
  timeType: "minutes" | "hours" | "days" | "nights" | "weeks";
  cost: number;
  slug: string;
};

export type PlaceOverviewType = {
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
setPlace(hotelsMock);

export const events = {
  setPlace,
};
