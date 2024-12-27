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
    image: "/assets/icons/apartment.svg",
    active_image: "/assets/icons/apartment_active.svg",
    id: 1,
  },
  {
    name: "Penthouse",
    image: "/assets/icons/penthouse.svg",
    active_image: "/assets/icons/penthouse_active.svg",
    id: 2,
  },
  {
    name: "Residential Floor",
    image: "/assets/icons/residentialfloor.svg",
    active_image: "/assets/icons/residential_floor_active.svg",
    id: 3,
  },
  {
    name: "Hotel Apartment",
    image: "/assets/icons/hotelapartment.svg",
    active_image: "/assets/icons/hotel_apartment_active.svg",
    id: 4,
  },
  {
    name: "Villa",
    image: "/assets/icons/villa.svg",
    active_image: "/assets/icons/villa_active.svg",
    id: 7,
  },
  {
    name: "Townhouse",
    image: "/assets/icons/townhouse.svg",
    active_image: "/assets/icons/townhouse_active.svg",
    id: 5,
  },

  {
    name: "Residential Land",
    image: "/assets/icons/residential_land.svg",
    active_image: "/assets/icons/residential_land_active.svg",
    id: 6,
  },
] as UnitTypeFilterProps[];

export const COMMERCIAL = [
  {
    name: "Commercial Villa",
    image: "/assets/icons/commercial_villa.svg",
    active_image: "/assets/icons/commercial_villa_active.svg",
    id: 1,
  },
  {
    name: "Commercial Floor",
    image: "/assets/icons/commercial_floor.svg",
    active_image: "/assets/icons/commercial_floor_active.svg",
    id: 2,
  },
  {
    name: "Offices",
    image: "/assets/icons/offices.svg",
    active_image: "/assets/icons/offices_active.svg",
    id: 3,
  },
  {
    name: "Retail",
    image: "/assets/icons/retail.svg",
    active_image: "/assets/icons/retail_active.svg",
    id: 4,
  },
  {
    name: "Office",
    image: "/assets/icons/office.svg",
    active_image: "/assets/icons/office_active.svg",
    id: 5,
  },
  {
    name: "Shop",
    image: "/assets/icons/shop.svg",
    active_image: "/assets/icons/shop_active.svg",
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
