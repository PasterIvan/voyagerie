import { createEffect, restore } from "effector";
import { api } from "shared/api";
import { createModalModel } from "shared/lib/store";

export const modal = createModalModel();

const getQuestions = createEffect(api.getQuestions);
export const $questions = restore(getQuestions.doneData, null);

export const fx = {
  getQuestions,
};
