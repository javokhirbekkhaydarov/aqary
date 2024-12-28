import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  AdvancedFilterState,
  CitiesType,
  SelectValuePayload,
} from "@/types/types";

import { CITIES, HANDOVER_BY } from "@/constants/filterOptions";

const initialState: AdvancedFilterState = {
  cities: [],
  category: "",
  unitType: "",
  bedrooms: [],
  baths: [],
  parks: [],
  completion_status: [],
  listedBy: "",
  ownership: [],
  furnishing: [],
  handoverBy: [],
  completion: [],
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
    toggleHandover: (state, action: PayloadAction<CitiesType>) => {
      const index = state.handoverBy.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        state.handoverBy.splice(index, 1);
      } else {
        state.handoverBy.push(action.payload);
      }
    },
    toggleCompletion: (state, action: PayloadAction<CitiesType>) => {
      const index = state.completion.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        state.completion.splice(index, 1);
      } else {
        state.completion.push(action.payload);
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
    selectValue: (state, action: PayloadAction<SelectValuePayload>) => {
      const { value, type } = action.payload;
      let targetArray: (string | number)[];

      switch (type) {
        case "bedroom":
          targetArray = state.bedrooms;
          break;
        case "bath":
          targetArray = state.baths;
          break;
        case "park":
          targetArray = state.parks;
          break;
        case "completion_status":
          targetArray = state.completion_status;
          break;
        case "ownership":
          targetArray = state.ownership;
        case "furnishing":
          targetArray = state.furnishing;
          break;
        default:
          return;
      }

      const index = targetArray.findIndex((item) => item === value);
      if (index >= 0) {
        targetArray.splice(index, 1);
      } else {
        targetArray.push(value);
      }
    },
    selectListedBy: (state, action: PayloadAction<string>) => {
      state.listedBy = action.payload;
    },
  },
});

export const {
  toggleCity,
  clearCity,
  selectCategory,
  selectUnitType,
  selectValue,
  selectListedBy,
  toggleHandover,
  toggleCompletion,
} = advancedFilter.actions;
export default advancedFilter.reducer;
