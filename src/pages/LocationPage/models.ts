import { restore, sample } from "effector";
import { createGate } from "effector-react";
import { locationModel } from "entities/location";
import { createErrorHandler } from "shared/lib/store";

const errorHandler = createErrorHandler();

const pageGate = createGate<{
  slug?: string;
}>();

sample({
  source: restore(pageGate.open, null),
  clock: pageGate.open,
  filter: (state) => Boolean(state?.slug),
}).watch((state) => locationModel.fx.getCountryFx(state!.slug!));

sample({
  source: restore(pageGate.open, null),
  clock: pageGate.open,
  filter: (state) => !Boolean(state?.slug),
  target: errorHandler.events.notFound,
});

sample({
  source: locationModel.fx.getCountryFx.failData,
  clock: locationModel.fx.getCountryFx.fail,
}).watch((error) => {
  console.error(error);

  if (error.response?.status === 404) {
    errorHandler.events.notFound();
  }
  errorHandler.events.serverError();
});

export const gates = { pageGate, errorGate: errorHandler.gate };

export const events = {
  ...errorHandler.events,
};
