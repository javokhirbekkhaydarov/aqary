import { CitiesType } from "@/types/types";

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
  "Apartment",
  "Pent House",
  "Luxury Unit",
  "Town House",
  "Residential Floor",
  "Residential Land",
] as const;
export const COMMERCIAL = [
  "Commercial Villa",
  "Commercial Floor",
  "Offices",
  "Retail",
  "Office",
  "Shop",
] as const;
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
