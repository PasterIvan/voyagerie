import { sample, restore } from "effector";
import { createGate } from "effector-react";
import { placeModel } from "entities/place";
import { createErrorHandler } from "shared/lib/store";

const errorHandler = createErrorHandler();

const pageGate = createGate<{
  slug?: string;
}>();

sample({
  source: restore(pageGate.open, null),
  clock: pageGate.open,
  filter: (state) => Boolean(state?.slug),
}).watch((state) => placeModel.fx.getHotelFx(state!.slug!));

sample({
  source: restore(pageGate.open, null),
  clock: pageGate.open,
  filter: (state) => !Boolean(state?.slug),
  target: errorHandler.events.notFound,
});

sample({
  source: placeModel.fx.getHotelFx.failData,
  clock: placeModel.fx.getHotelFx.failData,
}).watch((error) => {
  console.error(error);

  if (error.response?.status === 404) {
    errorHandler.events.notFound();
    return;
  }
  errorHandler.events.serverError();
});

export const gates = { pageGate, errorGate: errorHandler.gate };

export const events = {
  ...errorHandler.events,
};
