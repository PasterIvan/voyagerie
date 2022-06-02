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
import { api, CountryType, MainText } from "shared/api/api";
import { AxiosError } from "axios";
import { createErrorHandler } from "shared/lib/store";
import { modalModels } from "widgets/modals";
import { questionnaireModel } from "feature/questionnaire";

const errorHandler = createErrorHandler();

const getMainTextFx = createEffect<void, MainText>(api.getMainText);

const getCountriesFx = createEffect<void, CountryType[], AxiosError>(
  api.getCountries
);
export const $items = restore(getCountriesFx.doneData, null);
export const $text = restore(getMainTextFx.doneData, null);

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
  from: [
    getCountriesFx.fail,
    getMainTextFx.fail,
    modalModels.fx.getModalsFx.fail,
    questionnaireModel.fx.getQuestions.fail,
  ],
  to: errorHandler.events.serverError,
});

forward({
  from: mainGate.open,
  to: [
    getCountriesFx,
    getMainTextFx,
    modalModels.fx.getModalsFx,
    questionnaireModel.fx.getQuestions,
  ],
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
  getMainTextFx,
};
