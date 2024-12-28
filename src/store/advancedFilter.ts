import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  AdvancedFilterState,
  CitiesType,
  SelectValuePayload,
} from "@/types/types";

import { CITIES } from "@/constants/filterOptions";
import { initialCities } from "@/constants/cities";

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

export const advancedFilter = createSlice({
  name: "advancedFilter",
  initialState,
  reducers: {
    toggleCity: (state, action: PayloadAction<CitiesType>) => {
      const cityIndex = state.cities.findIndex(
        (city) => city.id === action.payload.id,
      );
      if (cityIndex >= 0) {
        state.cities.splice(cityIndex, 1);
        CITIES.push(action.payload);
      } else {
        state.cities.push(action.payload);
        const cityIndexInCITIES = CITIES.findIndex(
          (city) => city.id === action.payload.id,
        );
        if (cityIndexInCITIES >= 0) {
          CITIES.splice(cityIndexInCITIES, 1);
        }
      }
    },

    toggleItem: (
      state,
      action: PayloadAction<{ type: string; payload: CitiesType }>,
    ) => {
      const { type, payload } = action.payload;
      if (type === "handoverBy") {
        const index = state.handoverBy.findIndex(
          (item) => item.id === payload.id,
        );
        if (index >= 0) {
          state.handoverBy.splice(index, 1);
        } else {
          state.handoverBy.push(payload);
        }
      } else if (type === "completion") {
        const index = state.completion.findIndex(
          (item) => item.id === payload.id,
        );
        if (index >= 0) {
          state.completion.splice(index, 1);
        } else {
          state.completion.push(payload);
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
          break;
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
  selectValue,
  selectListedBy,
  toggleItem,
} = advancedFilter.actions;
export default advancedFilter.reducer;
