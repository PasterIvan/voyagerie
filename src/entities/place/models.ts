import { createEvent, createStore } from "effector";
import { placesMock } from "./config/mock";

export type PlaceType = {
  name: string;
  image: string;
  hotelsNumber: number;
  airTemperature: number;
  waterTemperature: number;
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
