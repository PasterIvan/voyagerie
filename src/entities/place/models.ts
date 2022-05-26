import { AxiosError } from "axios";
import { createEffect, createEvent, createStore, restore } from "effector";
import { api, PlaceOverviewType } from "shared/api/api";

const getHotelFx = createEffect<string, PlaceOverviewType, AxiosError>((slug) =>
  api.getHotel(slug)
);

export const $place = restore(getHotelFx.doneData, null);

export const events = {};

export const fx = {
  getHotelFx,
};
