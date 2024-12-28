import { Amenity, CitiesType, UnitTypeFilterProps } from "@/types/types";

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
export const PARKS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, "12+"] as
  | number[]
  | string[];
export const COMPLETION_STATUS = ["Off Plans", "Ready", "Re-Sale"] as string[];

export const LISTED_BY = [
  {
    name: "Aldar",
    image: "aldar",
    active_image: "aldar",
    id: 1,
  },
  {
    name: "Emaar",
    image: "emaar",
    active_image: "emaar",
    id: 2,
  },
  {
    name: "Damac",
    image: "Damac",
    active_image: "Damac",
    id: 3,
  },
  {
    name: "Sobha",
    image: "Sobha",
    active_image: "sobha",
    id: 4,
  },
] as UnitTypeFilterProps[];
export const OWNERSHIP = [
  "Local Citizen",
  "Freehold",
  "Lease Hold",
] as string[];
export const FURNISHING = [
  "Furnished",
  "Unfurnished",
  "Semi Furnished",
] as string[];

export const HANDOVER_BY = [
  {
    id: 1,
    name: "Any",
  },
  {
    id: 2,
    name: "Sep 2024",
  },
  {
    id: 3,
    name: "Aug 2024",
  },
  {
    id: 4,
    name: "Jul 2024",
  },
  {
    id: 5,
    name: "Jun 2024",
  },
  {
    id: 6,
    name: "May 2024",
  },
  {
    id: 7,
    name: "Apr 2024",
  },
  {
    id: 8,
    name: "Mar 2024",
  },
  {
    id: 9,
    name: "Feb 2024",
  },
  {
    id: 10,
    name: "Jan 2024",
  },
] as CitiesType[];

export const COMPLETION = [
  {
    id: 1,
    name: "0-25%",
  },
  {
    id: 2,
    name: "25-50%",
  },
  {
    id: 3,
    name: "50-75%",
  },
  {
    id: 4,
    name: "75-100%",
  },
] as CitiesType[];

export interface AmenityCategory {
  category: string;
  amenities: { id: number; name: string }[];
}

export const AMENITIES: AmenityCategory[] = [
  {
    category: "Furniture",
    amenities: [
      { id: 1, name: "Furnished" },
      { id: 2, name: "Central gas" },
      { id: 3, name: "Parking spaces" },
      { id: 4, name: "Study room" },
      { id: 5, name: "Central a/c" },
      { id: 6, name: "Central heating" },
      { id: 7, name: "Built-in wardrobe" },
      { id: 8, name: "Walk-in closet" },
    ],
  },
  {
    category: "Building",
    amenities: [
      { id: 1, name: "Balcony/terrace" },
      { id: 2, name: "Cigar room" },
      { id: 3, name: "Dining in building" },
      { id: 4, name: "Mezzanine" },
      { id: 5, name: "Lobby in building" },
      { id: 6, name: "Retail building" },
      { id: 7, name: "Vastu compliment" },
      { id: 8, name: "Conference room" },
    ],
  },
  {
    category: "Health & Fitness",
    amenities: [
      { id: 9, name: "Shared sauna" },
      { id: 10, name: "Private children pool" },
      { id: 11, name: "Private gym" },
      { id: 12, name: "Shared gym" },
      { id: 13, name: "Private jacuzzi" },
      { id: 14, name: "Shared pool" },
      { id: 15, name: "Private pool" },
      { id: 16, name: "Shared children pool" },
      { id: 17, name: "Private sauna" },
      { id: 18, name: "First aid medical centre" },
      { id: 19, name: "Shared jacuzzi" },
    ],
  },
  {
    category: "Laundry & Kitchen",
    amenities: [
      { id: 20, name: "Laundry room" },
      { id: 21, name: "Built-in kitchen appliances" },
      { id: 22, name: "Shared children pool" },
      { id: 23, name: "Maid's room" },
      { id: 24, name: "Maid service" },
      { id: 25, name: "Ironing capabilities" },
      { id: 26, name: "Hangers" },
      { id: 27, name: "Luggage storage" },
      { id: 28, name: "Pantry" },
      { id: 29, name: "Dishwasher" },
    ],
  },
];
