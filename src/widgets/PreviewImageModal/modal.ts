import { createEvent, createStore } from "effector";
import { createModalModel } from "shared/lib/store";

export const modalModel = createModalModel();

const setImagePreview = createEvent<string>();
const resetImagePreview = createEvent();

export const events = {
  setImagePreview,
  resetImagePreview,
};

export const $currentImage = createStore<string | null>(null)
  .on(setImagePreview, (_, image) => image)
  .reset(resetImagePreview);
