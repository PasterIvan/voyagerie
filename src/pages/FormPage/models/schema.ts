import dayjs, { Dayjs } from "dayjs";
import { createForm } from "effector-forms";
import { AGE_OF_MAJORITY, MIN_CHILD_AGE } from "shared/config/constants";

export type FormType = {
  suggestTickets: boolean;
  dateFrom: Dayjs | null;
  dateTo: Dayjs | null;
  adultsCount: number;
  childCount: number;
  foodType: string | null;
  ages: number[];
  comment?: string;
  contacts?: string;
  buttons: {
    isWhatsapp: boolean;
    isTelegram: boolean;
    isPhone: boolean;
  };
};

export const formSchema = createForm<FormType>({
  fields: {
    suggestTickets: {
      init: false,
      rules: [
        {
          name: "suggest-tickets",
          validator: (value: boolean) => typeof value === "boolean",
        },
      ],
    },
    dateFrom: {
      init: dayjs(),
      rules: [
        {
          name: "date-from-validation",
          validator: (value: Dayjs | null) => dayjs(value).isValid(),
        },
      ],
    },
    dateTo: {
      init: dayjs(),
      rules: [
        {
          name: "date-to-validation",
          validator: (value: Dayjs | null) => dayjs(value).isValid(),
        },
      ],
    },
    adultsCount: {
      init: 0,
      rules: [
        {
          name: "adults-count",
          validator: (count: number) => typeof count === "number" && count > 0,
        },
      ],
    },
    childCount: {
      init: 0,
      rules: [
        {
          name: "child-count",
          validator: (count: number) => typeof count === "number",
        },
      ],
    },
    foodType: {
      init: null,
      rules: [
        {
          name: "food-type",
          validator: (value: string | null) => typeof value === "string",
        },
      ],
    },
    ages: {
      init: [],
      rules: [
        {
          name: "min-ages-valid",
          validator: (ages: number[], form) =>
            ages.slice(0, form.childCount).every((age) => age >= MIN_CHILD_AGE),
        },
        {
          name: "max-ages-valid",
          validator: (ages: number[], form) =>
            ages
              .slice(0, form.childCount)
              .every((age) => age <= AGE_OF_MAJORITY),
        },
        {
          name: "ages-filled",
          validator: (ages: number[], form) => ages.length >= form.childCount,
        },
      ],
    },
    comment: {
      init: "",
    },
    contacts: {
      init: "",
      rules: [
        {
          name: "contacts-required",
          validator: (contacts) => Boolean(contacts?.length),
        },
      ],
    },
    buttons: {
      init: {
        isWhatsapp: false,
        isTelegram: false,
        isPhone: false,
      },
    },
  },
  validateOn: ["submit"],
});
