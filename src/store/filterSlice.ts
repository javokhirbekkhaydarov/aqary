import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterState } from "@/types/types";

const initialState: FilterState = {
  section: "Unit",
  category: "Sale",
  unitType: "Unit Type",
  searchQuery: "",
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
  },
});

export const { setSection, setCategory, setUnitType, setSearchQuery } =
  filterSlice.actions;
export default filterSlice.reducer;
