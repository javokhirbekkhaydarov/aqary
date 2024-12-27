import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filterSlice";
import { advancedFilter } from "./advancedFilter";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    advancedFilter: advancedFilter.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
