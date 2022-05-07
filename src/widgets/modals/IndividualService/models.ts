import { createEvent, createStore } from "effector";

export const openModal = createEvent();
export const closeModal = createEvent();
export const $isOpen = createStore(false)
  .on(openModal, () => true)
  .reset(closeModal);

export const events = {
  openModal,
  closeModal,
};
