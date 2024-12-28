import { CitiesType, UnitTypeFilterProps } from "@/types/types";

export const CATEGORIES = ["Sale", "Rent", "Swap", "Investment"] as const;
export const SECTIONS = [
  "Projects",
  "Unit",
  "Luxury Unit",
  "Property",
  "Luxury Property",
  "Industry",
] as const;
export const RESIDENTIAL = [
  {
    name: "Apartment",
    image: "apartment",
    active_image: "apartment_active",
    id: 1,
  },
  {
    name: "Penthouse",
    image: "penthouse",
    active_image: "penthouse_active",
    id: 2,
  },
  {
    name: "Residential Floor",
    image: "residentialfloor",
    active_image: "residential_floor_active",
    id: 3,
  },
  {
    name: "Hotel Apartment",
    image: "hotelapartment",
    active_image: "hotel_apartment_active",
    id: 4,
  },
  {
    name: "Villa",
    image: "villa",
    active_image: "villa_active",
    id: 7,
  },
  {
    name: "Townhouse",
    image: "townhouse",
    active_image: "townhouse_active",
    id: 5,
  },

  {
    name: "Residential Land",
    image: "residential_land",
    active_image: "residential_land_active",
    id: 6,
  },
] as UnitTypeFilterProps[];

export const COMMERCIAL = [
  {
    name: "Commercial Villa",
    image: "townhouse",
    active_image: "townhouse_active",
    id: 1,
  },
  {
    name: "Commercial Floor",
    image: "townhouse",
    active_image: "townhouse_active",
    id: 2,
  },
  {
    name: "Offices",
    image: "villa",
    active_image: "villa_active",
    id: 3,
  },
  {
    name: "Retail",
    image: "hotelapartment",
    active_image: "hotel_apartment_active",
    id: 4,
  },
  {
    name: "Office",
    image: "penthouse",
    active_image: "penthouse_active",
    id: 5,
  },
  {
    name: "Shop",
    image: "residential_land",
    active_image: "residential_land_active",
    id: 6,
  },
] as UnitTypeFilterProps[];

export const POPULAR_SEARCHES = [
  "Resident House",
  "Villa",
  "Country Side",
] as const;
export const CITIES = [
  {
    id: 1,
    name: "Ras Al Khaimah(2k+)",
  },
  {
    id: 2,
    name: "Abu Dhabi(937)",
  },
  {
    id: 3,
    name: "Dubai(2k+)",
  },
  {
    id: 4,
    name: "Sharjah(596)",
  },
  {
    id: 5,
    name: "Ajman(800)",
  },
  {
    id: 6,
    name: "Fujairah(1M+)",
  },
  {
    id: 7,
    name: "Umm Al-Quwain(2M+)",
  },
] as CitiesType[];
export const BEDROOMS = ["Studio", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, "12+"] as
  | number[]
  | string[];
export const BATHROOMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, "12+"] as
  | number[]
  | string[];
