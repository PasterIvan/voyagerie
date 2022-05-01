import { Locales } from "shared/config/constants";

export type HotelType = {
  image: string;
  name: Record<Locales, string>;
  transferType: "air" | "water" | "air-water";
  minutes: number;
  cost: number;
  slug: string;
};
