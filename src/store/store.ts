import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filterSlice";
import { advancedFilterSlice } from "./advancedFilterSlice";
import { amenitiesSlice } from "./amenitiesSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    amenities: amenitiesSlice.reducer,
    advancedFilter: advancedFilterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
