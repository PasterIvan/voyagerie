import { forward } from "effector";
import { createGate } from "effector-react";
import { contactsModel } from "entities/contacts";
import { createErrorHandler } from "shared/lib/store";

const mainGate = createGate();
const errorHandler = createErrorHandler();

forward({
  from: mainGate.open,
  to: contactsModel.fx.getContactsFx,
});

forward({
  from: contactsModel.fx.getContactsFx.fail,
  to: errorHandler.events.serverError,
});

export const events = {
  ...errorHandler.events,
};

export const gates = {
  mainGate,
  errorGate: errorHandler.gate,
};
