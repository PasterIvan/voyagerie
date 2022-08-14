import { createEvent, createStore, restore, sample } from "effector";
import { createGate } from "effector-react";

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

export const createErrorHandler = () => {
  const gate = createGate<{
    notFoundHandler: () => void;
    serverErrorHandler: () => void;
  }>();

  const serverError = createEvent();
  const notFound = createEvent();

  sample({
    source: restore(gate.open, null),
    clock: serverError,
  }).watch((state) => state!.serverErrorHandler());

  sample({
    source: restore(gate.open, null),
    clock: notFound,
  }).watch((state) => state!.notFoundHandler());

  return { gate, events: { serverError, notFound } };
};

export const getObjectFromLocalStorage = (key: string) => {
  const item = localStorage.getItem(key);

  if (item) {
    try {
      return JSON.parse(item);
    } catch {
      return null;
    }
  }
};

export const setObjectToLocalStorage = (key: string, value: any) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(e);
  }
};
