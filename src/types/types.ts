import React from "react";

export interface FilterState {
  section: string;
  category: string;
  unitType: string;
  searchQuery: string;
  priceRange: [number | null, number | null];
}
export interface AdvancedFilterState {
  cities: CitiesType[];
  category: string;
  unitType: string;
  bedrooms: (string | number)[];
  baths: (string | number)[];
  parks: (string | number)[];
  completion_status: string[];
  listedBy: string;
}
export interface FilterDropdownProps {
  value: string;
  options: readonly string[];
  onSelect: (value: string) => void;
  label: string;
}
export interface PriceProps {
  label: string;
}

export interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface UnitTypeDropdownProps {
  value: string;
  onSelect: (value: string) => void;
}

export interface UnitTypeFilterProps {
  name: string;
  image: string;
  active_image: string;
  id: number;
  onClick: () => void;
}

//  STATIC DATA TYPES

export interface CitiesType {
  id: number;
  name: string;
}

//  category card
export interface CategoryCardProps {
  value: string;
  isSelected: boolean;
  onClick: () => void;
  image: string;
}
// bedroooms

export type ChipType = "bedroom" | "bath" | "park" | "completion_status";

export interface ChipsProps {
  value: string | number;
  type: ChipType;
  onClick: () => void;
}

export interface SelectValuePayload {
  value: string | number;
  type: ChipType;
}
