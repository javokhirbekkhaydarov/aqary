import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AmenitiesState {
  selectedAmenities: string[];
}

const initialState: AmenitiesState = {
  selectedAmenities: [],
};

export const amenitiesSlice = createSlice({
  name: "amenities",
  initialState,
  reducers: {
    setSelectedAmenities: (state, action: PayloadAction<string[]>) => {
      state.selectedAmenities = action.payload;
    },
  },
});

export const { setSelectedAmenities } = amenitiesSlice.actions;
export default amenitiesSlice.reducer;
