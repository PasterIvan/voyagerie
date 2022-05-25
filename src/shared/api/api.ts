import { baseApi } from "./base";

export type CountryType = {
  image: string;
  countryCode: string;
  hotelsNumber: number;
  name: {
    ru: string;
    en: string;
  };
  slug: string;
};
export const getCountries = (): Promise<CountryType[]> => {
  return baseApi.get(`countries`).then((response) => response.data);
};

export type HotelType = {
  time: number;
  image: string;
  name: {
    ru: string;
    en: string;
  };
  transferType: string;
  cost: number;
  slug: string;
};
export const getCountry = (
  slug: string
): Promise<CountryType & { hotels: HotelType[] }> => {
  return baseApi.get(`country/${slug}`).then((response) => response.data);
};

export const api = {
  getCountries,
  getCountry,
};
