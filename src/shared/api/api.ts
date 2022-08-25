import { FormType } from "pages/FormPage/models/schema";
import { baseApi } from "./base";

export type CountryType = {
  image: string;
  countryCode: string;
  hotelsNumber: number;
  totalHotelsNumber: number;
  description: {
    ru: string;
    en: string;
  };
  name: {
    ru: string;
    en: string;
  };
  slug: string;
};
const getCountries = (): Promise<CountryType[]> => {
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
const getCountry = (
  slug: string
): Promise<CountryType & { hotels: HotelType[] }> => {
  return baseApi.get(`country/${slug}`).then((response) => response.data);
};

export type ResidenceType = {
  id: string;
  name: Record<string, string>;
  image: string;
  images: string[];
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
const getHotel = (slug: string): Promise<PlaceOverviewType> => {
  return baseApi.get(`hotel/${slug}`).then((response) => response.data);
};

export type MainText = {
  ru: {
    line1: {
      text1: string;
      text2: string;
    };
    line2: {
      text1: string;
      text2: string;
    };
    line3: string;
  };
  en: {
    line1: {
      text1: string;
      text2: string;
    };
    line2: {
      text1: string;
      text2: string;
    };
    line3: string;
  };
};
const getMainText = (): Promise<MainText> => {
  return baseApi.get(`mainText`).then((response) => response.data);
};

export type ModalsText = Record<
  "bestPrices" | "individualService",
  {
    title: Record<string, string>;
    content: Record<string, string>;
  }
>;
const getModalsText = (): Promise<ModalsText> => {
  return baseApi.get(`modals`).then((response) => response.data);
};

export type Questions = {
  question: Record<string, string>;
  suggestion: Record<string, string>;
  placeholder: Record<string, string>;
  isRequired: boolean;
}[];
const getQuestions = (): Promise<Questions> => {
  return baseApi.get(`questions`).then((response) => response.data);
};

export type Contacts = {
  email: string;
  phone: string;
  address: {
    ru: string;
    en: string;
  };
};
const getContacts = (): Promise<Contacts> => {
  return baseApi.get(`contacts`).then((response) => response.data);
};

const sendQuestionary = (
  data: Record<number, string | undefined>
): Promise<void> => {
  return baseApi.post(`research`, data);
};

const sendForm = (data: FormType): Promise<void> => {
  return baseApi.post(`order`, data);
};

export const api = {
  getCountries,
  getCountry,
  getHotel,
  getMainText,
  getModalsText,
  getQuestions,
  getContacts,
  sendQuestionary,
  sendForm,
};
