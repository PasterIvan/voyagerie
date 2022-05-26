import {
  combine,
  createEffect,
  createEvent,
  createStore,
  forward,
  restore,
  sample,
} from "effector";
import { createGate } from "effector-react";
import { api, CountryType } from "shared/api/api";
import { AxiosError } from "axios";
import { createErrorHandler } from "shared/lib/store";

const errorHandler = createErrorHandler();

const getCountriesFx = createEffect<void, CountryType[], AxiosError>(
  api.getCountries
);
export const $items = restore(getCountriesFx.doneData, null);

const scrollToLocations = createEvent();
const onScrolled = createEvent();

export const $shouldScroll = createStore(false)
  .on(scrollToLocations, () => true)
  .reset(onScrolled);

const mainGate = createGate<{
  scrollToLocationsHandler: () => void;
  scrollToTop: () => void;
}>();

forward({
  from: getCountriesFx.fail,
  to: errorHandler.events.serverError,
});

forward({
  from: mainGate.open,
  to: getCountriesFx,
});

sample({
  source: combine([mainGate.state, mainGate.status, $shouldScroll]),
  clock: $shouldScroll,
  filter: ([_, isMounted, shouldScroll]) => isMounted && shouldScroll,
}).watch(([{ scrollToLocationsHandler }]) => {
  scrollToLocationsHandler();
  onScrolled();
});

sample({
  source: combine([restore(mainGate.open, null), $shouldScroll]),
  clock: mainGate.open,
  filter: ([state]) =>
    Boolean(state && state.scrollToLocationsHandler && state.scrollToTop),
}).watch(([state, shouldScroll]) => {
  if (shouldScroll) {
    state!.scrollToLocationsHandler();
    onScrolled();
  } else {
    state!.scrollToTop();
  }
});

export const events = {
  scrollToLocations,
  ...errorHandler.events,
};

export const gates = {
  mainGate,
  errorGate: errorHandler.gate,
};

export const fx = {
  getCountriesFx,
};
