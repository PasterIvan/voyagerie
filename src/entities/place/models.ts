import { createEvent, createStore } from "effector";
import { HotelType } from "entities/hostels/models";
import { Locales } from "shared/config/constants";
import { placeMock, placesMock } from "../../shared/api/placesMock";

export type PlaceType = {
  name: Record<Locales, string>;
  image: string;
  hotelsNumber: number;
  airTemperature: number;
  waterTemperature: number;
  slug: string;
};

export type PlaceOverviewType = PlaceType & {
  hotels: HotelType[];
  totalHotelsNumber: number;
};

const setPlace = createEvent<PlaceOverviewType>();
const setPlaces = createEvent<PlaceType[]>();

export const $place = createStore<PlaceOverviewType | null>(null).on(
  setPlace,
  (_, places) => places
);

export const $places = createStore<PlaceType[]>([]).on(
  setPlaces,
  (_, places) => places
);

//TODO: Dev only
setPlaces(placesMock);
setPlace(placeMock);

export const events = {
  setPlace,
  setPlaces,
};
