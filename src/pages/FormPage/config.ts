import { IconType } from "react-icons";
import { CgPhone } from "react-icons/cg";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { FormType } from "./models/schema";

export const foodType = [
  { label: "AO", descriptionKey: "accommodationOnly" },
  { label: "BB", descriptionKey: "breakfastOnly" },
  { label: "HB", descriptionKey: "halfBoard" },
  { label: "FB", descriptionKey: "fullBoard" },
];

export const buttons: Record<
  keyof FormType["buttons"],
  {
    field: keyof FormType["buttons"];
    key: string;
    icon: IconType;
    hoverClassName: string;
    activeClassName: string;
    mask: RegExp;
  }
> = {
  isWhatsapp: {
    field: "isWhatsapp",
    key: "whatsapp",
    icon: FaWhatsapp,
    hoverClassName: "group-hover:text-[#25D366]",
    activeClassName: "!text-[#25D366]",
    mask: /(?:[+]*\d{3,})*\s?\d{3}[-]?\d{6}/m,
  },
  isTelegram: {
    field: "isTelegram",
    key: "telegram",
    icon: FaTelegramPlane,
    hoverClassName: "group-hover:text-[#229ED9]",
    activeClassName: "!text-[#229ED9]",
    mask: /.*\B@(?=\w{5,32}\b)[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*/m,
  },
  isPhone: {
    field: "isPhone",
    key: "phone",
    icon: CgPhone,
    hoverClassName: "group-hover:text-gray-400",
    activeClassName: "!text-gray-400",
    mask: /[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}/m,
  },
} as const;
