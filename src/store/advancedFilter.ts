import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  AdvancedFilterState,
  BedroomChipsProps,
  CitiesType,
} from "@/types/types";
import { CITIES } from "@/constants/filterOptions";

const initialState: AdvancedFilterState = {
  cities: [],
  category: "",
  unitType: "",
  bedrooms: [],
};

const initialCities = [
  { id: 1, name: "Ras Al Khaimah(2k+)" },
  { id: 2, name: "Abu Dhabi(937)" },
  { id: 3, name: "Dubai(2k+)" },
  { id: 4, name: "Sharjah(596)" },
  { id: 5, name: "Ajman(800)" },
  { id: 6, name: "Fujairah(1M+)" },
  { id: 7, name: "Umm Al-Quwain(2M+)" },
];

export const advancedFilter = createSlice({
  name: "advancedFilter",
  initialState,
  reducers: {
    toggleCity: (state, action: PayloadAction<CitiesType>) => {
      const cityIndex = state.cities.findIndex(
        (city) => city.id === action.payload.id
      );
      if (cityIndex >= 0) {
        state.cities.splice(cityIndex, 1);
        CITIES.push(action.payload);
      } else {
        state.cities.push(action.payload);
        const cityIndexInCITIES = CITIES.findIndex(
          (city) => city.id === action.payload.id
        );
        if (cityIndexInCITIES >= 0) {
          CITIES.splice(cityIndexInCITIES, 1);
        }
      }
    },
    clearCity: (state) => {
      state.cities = [];
      CITIES.length = 0;
      CITIES.push(...initialCities);
    },
    selectCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    selectUnitType: (state, action: PayloadAction<string>) => {
      state.unitType = action.payload;
    },
    selectBedroom: (
      state: AdvancedFilterState,
      action: PayloadAction<string | number>
    ) => {
      const index = state.bedrooms.findIndex(
        (bedroom) => bedroom === action.payload
      );
      if (index >= 0) {
        state.bedrooms.splice(index, 1);
      } else {
        state.bedrooms.push(action.payload);
      }
    },
  },
});

export const {
  toggleCity,
  clearCity,
  selectCategory,
  selectUnitType,
  selectBedroom,
} = advancedFilter.actions;
export default advancedFilter.reducer;
