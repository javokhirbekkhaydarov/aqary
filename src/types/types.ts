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
}
