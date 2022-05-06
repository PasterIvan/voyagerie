import { combine, createEvent, createStore, restore, sample } from "effector";
import { createGate } from "effector-react";

export const scrollToLocations = createEvent();
const onScrolled = createEvent();

export const $shouldScroll = createStore(false)
  .on(scrollToLocations, () => true)
  .reset(onScrolled);

export const mainGate = createGate<{
  scrollToLocationsHandler: () => void;
  scrollToTop: () => void;
}>();

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
