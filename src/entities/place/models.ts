import { createEvent, createStore } from "effector";
import { Locales } from "shared/config/constants";
import { placesMock } from "./config/mock";

export type PlaceType = {
  name: Record<Locales, string>;
  image: string;
  hotelsNumber: number;
  airTemperature: number;
  waterTemperature: number;
  slug: string;
};

const setPlaces = createEvent<PlaceType[]>();

export const $places = createStore<PlaceType[]>([]).on(
  setPlaces,
  (_, places) => places
);

//TODO: Dev only
setPlaces(placesMock);

export const events = {
  setPlaces,
};
