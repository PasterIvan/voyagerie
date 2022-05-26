import { baseApi } from "./base";

export type CountryType = {
  image: string;
  countryCode: string;
  hotelsNumber: number;
  totalHotelsNumber: number;
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
  timeType: string;
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

export type ResidenceType = {
  id: string;
  name: Record<string, string>;
  image: string;
  price: number;
  description: Record<string, string>;
};

export type PlaceOverviewType = {
  rooms: ResidenceType[];
  slug: string;
  locationSlug: string;
  image: string;
  name: Record<string, string>;
  location: Record<string, string>;
  description: Record<string, string>;
  countryCode: string;
  content: {
    restorans: Record<string, string>;
    health: Record<string, string>;
    child: Record<string, string>;
  };
  gallery: string[];
};
export const getHotel = (slug: string): Promise<PlaceOverviewType> => {
  return baseApi.get(`hotel/${slug}`).then((response) => response.data);
};

export const api = {
  getCountries,
  getCountry,
  getHotel,
};
