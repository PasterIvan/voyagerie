import { createEvent, createStore } from "effector";

export const createModalModel = () => {
  const openModal = createEvent();
  const closeModal = createEvent();

  const $isOpen = createStore(false)
    .on(openModal, () => true)
    .reset(closeModal);

  const events = {
    openModal,
    closeModal,
  };

  return {
    $isOpen,
    events,
  };
};
