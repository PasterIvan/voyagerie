import { createEvent } from "effector";
import { createGate } from "effector-react";

export const scrollToPlaces = createEvent();

export const mainGate = createGate<{ scrollToPlacesHandler: () => void }>();
mainGate.state.on(scrollToPlaces, ({ scrollToPlacesHandler }) => {
  scrollToPlacesHandler();
});

export const events = {
  scrollToPlaces,
};
