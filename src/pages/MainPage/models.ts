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

export const getCountriesFx = createEffect<void, CountryType[], AxiosError>(
  api.getCountries
);
export const $items = restore(getCountriesFx.doneData, null);

export const scrollToLocations = createEvent();
const onScrolled = createEvent();

export const $shouldScroll = createStore(false)
  .on(scrollToLocations, () => true)
  .reset(onScrolled);

export const mainGate = createGate<{
  scrollToLocationsHandler: () => void;
  scrollToTop: () => void;
  handleNotFound: () => void;
  handleError: () => void;
}>();

sample({
  source: mainGate.state,
  clock: getCountriesFx.fail,
}).watch((state) => state.handleError());

forward({
  from: mainGate.open,
  to: getCountriesFx,
});

sample({
  source: combine([mainGate.state, mainGate.status, $shouldScroll]),
  clock: $shouldScroll,
}).watch(([{ scrollToLocationsHandler }, isMounted, shouldScroll]) => {
  if (!isMounted) {
    return;
  }

  if (shouldScroll) {
    scrollToLocationsHandler();
    onScrolled();
  }
});

sample({
  source: combine([mainGate.state, $shouldScroll]),
  clock: [mainGate.state, mainGate.open],
}).watch(([{ scrollToLocationsHandler, scrollToTop }, shouldScroll]) => {
  if (!scrollToLocationsHandler || !scrollToTop) {
    return;
  }

  if (shouldScroll) {
    scrollToLocationsHandler();
    onScrolled();
  } else {
    scrollToTop();
  }
});

export const events = {
  scrollToLocations,
};
