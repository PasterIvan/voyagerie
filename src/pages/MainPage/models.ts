import { Console } from "console";
import { combine, createEvent, createStore } from "effector";
import { createGate } from "effector-react";

export const scrollToLocations = createEvent();
const onScrolled = createEvent();

export const mainGate = createGate<{ scrollToLocationsHandler: () => void }>();
const $shouldScroll = createStore(false)
  .on(scrollToLocations, () => true)
  .reset(onScrolled);
const $mounted = createStore(false)
  .on(mainGate.open, () => true)
  .reset(mainGate.close);

combine({
  isMounted: $mounted,
  state: mainGate.state,
  shouldScroll: $shouldScroll,
}).watch(({ isMounted, state: gateState, shouldScroll }) => {
  if (isMounted && shouldScroll && gateState.scrollToLocationsHandler) {
    gateState.scrollToLocationsHandler();
    onScrolled();
  }
});

export const events = {
  scrollToLocations,
};
