import { createEvent, createStore } from "effector";
import { locationsMock, locationMock } from "shared/api/locationsMock";
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

export type LocationType = {
  name: Record<Locales, string>;
  image: string;
  hotelsNumber: number;
  airTemperature: number;
  waterTemperature: number;
  slug: string;
  countryCode: string;
};

export type LocationOverviewType = LocationType & {
  hotels: PlaceType[];
  totalHotelsNumber: number;
};

const setLocation = createEvent<LocationOverviewType>();
const setLocations = createEvent<LocationType[]>();

export const $location = createStore<LocationOverviewType | null>(null).on(
  setLocation,
  (_, locations) => locations
);

export const $locations = createStore<LocationType[]>([]).on(
  setLocations,
  (_, locations) => locations
);

//TODO: Dev only
setLocations(locationsMock);
setLocation(locationMock);

export const events = {
  setLocation,
  setLocations,
};
