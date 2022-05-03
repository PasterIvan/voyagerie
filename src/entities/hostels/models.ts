import { createEvent, createStore } from "effector";
import { hotelsMock } from "shared/api/hotelsMock";
import { Locales } from "shared/config/constants";

export type HotelType = {
  image: string;
  name: Record<Locales, string>;
  transferType: "air" | "water" | "air-water";
  time: number;
  timeType: "minutes" | "hours" | "days" | "nights" | "weeks";
  cost: number;
  slug: string;
};

export type HotelOverviewType = {
  slug: string;
  placeSlug: string;
  image: string;
  name: Record<Locales, string>;
  place: Record<Locales, string>;
  description: Record<Locales, string>;
  countryCode: string;
  content: {
    restorans: Record<Locales, string>;
    health: Record<Locales, string>;
    child: Record<Locales, string>;
  };
  gallery: string[];
};

const setHostel = createEvent<HotelOverviewType>();

export const $hostel = createStore<HotelOverviewType | null>(null).on(
  setHostel,
  (_, hostel) => hostel
);

//TODO: Dev only
setHostel(hotelsMock);

export const events = {
  setHostel,
};
