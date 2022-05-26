import { AxiosError } from "axios";
import { createEffect, createEvent, createStore, restore } from "effector";
import { api } from "shared/api";
import { CountryType, HotelType } from "shared/api/api";

const getCountryFx = createEffect<
  string,
  CountryType & { hotels: HotelType[] },
  AxiosError
>((slug) => api.getCountry(slug));

export const $location = restore(getCountryFx.doneData, null);

export const events = {};

export const fx = {
  getCountryFx,
};
