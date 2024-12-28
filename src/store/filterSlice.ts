import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterState } from "@/types/types";

const initialState: FilterState = {
  section: "Unit",
  category: "Sale",
  unitType: "Unit Type",
  searchQuery: "",
  priceRange: [222000, 800000],
  unitArea: [null, null],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSection: (state, action: PayloadAction<string>) => {
      state.section = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setUnitType: (state, action: PayloadAction<string>) => {
      state.unitType = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setPriceRange: (state, action: PayloadAction<Array<number | null>>) => {
      state.priceRange = [action.payload[0], action.payload[1]];
    },
    setAreaRange: (state, action: PayloadAction<Array<number | null>>) => {
      state.unitArea = [action.payload[0], action.payload[1]];
    },
  },
});

export const {
  setSection,
  setCategory,
  setUnitType,
  setSearchQuery,
  setPriceRange,
  setAreaRange,
} = filterSlice.actions;
export default filterSlice.reducer;
