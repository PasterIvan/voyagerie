import { createEffect, restore } from "effector";
import { createGate } from "effector-react";
import { api } from "shared/api";
import { createModalModel } from "../../shared/lib/store";

const getModalsFx = createEffect(api.getModalsText);

export const $modals = restore(getModalsFx.doneData, null);

const bestPrices = createModalModel();
const individualService = createModalModel();

const gate = createGate();

export const gates = {
  mainGate: gate,
};

export const models = {
  bestPrices,
  individualService,
};

export const fx = {
  getModalsFx,
};
