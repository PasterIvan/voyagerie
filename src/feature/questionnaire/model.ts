import { createEffect, forward, restore, sample } from "effector";
import { createGate } from "effector-react";
import { api } from "shared/api";
import { createModalModel } from "shared/lib/store";

const pageGate = createGate<{
  successSendCallback: () => void;
  failedSendCallback: () => void;
}>();
export const modal = createModalModel();

const getQuestions = createEffect(api.getQuestions);
export const $questions = restore(getQuestions.doneData, null);

const sendQuestionary = createEffect(api.sendQuestionary);

sample({
  source: pageGate.state,
  clock: sendQuestionary.done,
}).watch(({ successSendCallback }) => {
  successSendCallback?.();
});

sample({
  source: pageGate.state,
  clock: sendQuestionary.fail,
}).watch(({ failedSendCallback }) => {
  failedSendCallback?.();
});

export const fx = {
  getQuestions,
  sendQuestionary,
};

export const gates = {
  pageGate,
};
