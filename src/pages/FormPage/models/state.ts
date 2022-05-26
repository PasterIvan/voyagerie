import { Console } from "console";
import { sample, restore, forward, createEvent } from "effector";
import { createGate } from "effector-react";
import { locationModel } from "entities/location";
import { placeModel } from "entities/place";
import { createErrorHandler, createModalModel } from "shared/lib/store";
import { formSchema } from "./schema";

const errorHandler = createErrorHandler();

const pageGate = createGate<{ scrollToForm: () => void; slug?: string }>();
const scrollToForm = createEvent();

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
  source: pageGate.state,
  clock: scrollToForm,
}).watch(({ scrollToForm }) => {
  scrollToForm();
});

const successModal = createModalModel();

export const $isOpen = successModal.$isOpen;

export const gates = {
  pageGate,
  errorGate: errorHandler.gate,
};

export const events = {
  scrollToForm,
  ...successModal.events,
  ...errorHandler.events,
};

forward({
  from: formSchema.$values,
  to: formSchema.resetErrors,
});

sample({
  source: formSchema.$isValid,
  clock: formSchema.submit,
  filter: (isValid) => isValid,
  target: successModal.events.openModal,
});

sample({
  source: formSchema.$isValid,
  clock: formSchema.submit,
  filter: (isValid) => !isValid,
  target: scrollToForm,
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
