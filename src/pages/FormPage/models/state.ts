import { sample, restore, forward, createEvent, createEffect } from "effector";
import { createGate } from "effector-react";
import { placeModel } from "entities/place";
import { api } from "shared/api";
import { createErrorHandler, createModalModel } from "shared/lib/store";
import { formSchema } from "./schema";

const errorHandler = createErrorHandler();

const sendFormFx = createEffect(api.sendForm);

const pageGate = createGate<{
  scrollToForm: () => void;
  slug?: string;
  sendErrorHandler?: () => void;
  sendSuccessHandler?: () => void;
}>();
const scrollToForm = createEvent();
const sendForm = createEvent();

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

export const fx = {
  sendFormFx,
};

forward({
  from: formSchema.$values,
  to: formSchema.resetErrors,
});

sample({
  source: formSchema.$isValid,
  clock: formSchema.submit,
  filter: (isValid) => isValid,
  target: sendForm,
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

sample({
  source: formSchema.$values,
  clock: sendForm,
  target: sendFormFx,
});

sample({
  source: pageGate.state,
  clock: fx.sendFormFx.fail,
}).watch(({ sendErrorHandler }) => {
  sendErrorHandler?.();
});

sample({
  source: pageGate.state,
  clock: fx.sendFormFx.done,
}).watch(() => {
  events.openModal();
});
