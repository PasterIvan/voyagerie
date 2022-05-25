import { AxiosError } from "axios";
import { createEffect, forward, restore, sample } from "effector";
import { createGate } from "effector-react";
import { api } from "shared/api";
import { CountryType, HotelType } from "shared/api/api";
import { createErrorHandler } from "shared/lib/store";

const errorHandler = createErrorHandler();

const getCountryFx = createEffect<
  string,
  CountryType & { hotels: HotelType[] },
  AxiosError
>((slug) => api.getCountry(slug));

export const pageGate = createGate<{
  slug?: string;
}>();

sample({
  source: restore(pageGate.open, null),
  clock: pageGate.open,
  filter: (state) => Boolean(state?.slug),
}).watch((state) => getCountryFx(state!.slug!));

sample({
  source: restore(pageGate.open, null),
  clock: pageGate.open,
  filter: (state) => !Boolean(state?.slug),
  target: errorHandler.events.notFound,
});

forward({
  from: getCountryFx.fail,
  to: errorHandler.events.serverError,
});

export const fx = {
  getCountryFx,
};

export const gates = { pageGate, errorGate: errorHandler.gate };

export const events = {
  ...errorHandler.events,
};
