import { createEffect, restore } from "effector";
import { api } from "shared/api";

const getContactsFx = createEffect(api.getContacts);

export const $contacts = restore(getContactsFx.doneData, null);

export const fx = {
  getContactsFx,
};
