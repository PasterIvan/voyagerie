import { AxiosError } from "axios";
import { createEffect, forward, restore, sample } from "effector";
import { createGate } from "effector-react";
import { api } from "shared/api";
import { CountryType, HotelType } from "shared/api/api";

export const getCountryFx = createEffect<
  string,
  CountryType & { hotels: HotelType[] },
  AxiosError
>((slug) => api.getCountry(slug));

export const gate = createGate<{
  slug?: string;
  handleNotFound: () => void;
  handleError: () => void;
}>();

sample({
  source: restore(gate.open, null),
  clock: gate.open,
  filter: (state) => Boolean(state?.slug),
}).watch((state) => getCountryFx(state!.slug!));

sample({
  source: restore(gate.open, null),
  clock: gate.open,
  filter: (state) => !Boolean(state?.slug),
}).watch((state) => state?.handleNotFound());

sample({
  source: gate.state,
  clock: getCountryFx.fail,
}).watch((state) => state.handleError());
