import dayjs, { Dayjs } from "dayjs";
import { createForm } from "effector-forms";
import { createModalModel } from "widgets/modals/lib";

export const successModal = createModalModel();

export const formSchema = createForm<{
  suggestTickets: boolean;
  dateFrom: Dayjs | null;
  dateTo: Dayjs | null;
  adultsCount: number;
  childCount: number;
  foodType: string | null;
}>({
  fields: {
    suggestTickets: {
      init: false,
      rules: [
        {
          name: "suggestTickets",
          validator: (value: boolean) => typeof value === "boolean",
        },
      ],
    },
    dateFrom: {
      init: dayjs(),
      rules: [
        {
          name: "dateFrom validation",
          validator: (value: Dayjs | null) => dayjs(value).isValid(),
          errorText: "Неккоректное значение даты вылета",
        },
      ],
    },
    dateTo: {
      init: dayjs(),
      rules: [
        {
          name: "dateTo validation",
          validator: (value: Dayjs | null) => dayjs(value).isValid(),
          errorText: "Неккоректное значение даты прилета",
        },
      ],
    },
    adultsCount: {
      init: 0,
      rules: [
        {
          name: "adultsCount",
          validator: (count: number) => typeof count === "number" && count > 0,
          errorText: "Количество пассажиров должно быть больше 0",
        },
      ],
    },
    childCount: {
      init: 0,
      rules: [
        {
          name: "childCount",
          validator: (count: number) => typeof count === "number",
          errorText: "Неккоректное количество детей",
        },
      ],
    },
    foodType: {
      init: null,
      rules: [
        {
          name: "foodType",
          validator: (value: string | null) => typeof value === "string",
          errorText: "Питание выбрано некорректно",
        },
      ],
    },
  },
});
