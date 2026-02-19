import { configureStore } from "@reduxjs/toolkit";
import calcrReducer from "../Features/clac/calcSlice";

export const store = configureStore({
  reducer: {
    calculator: calcrReducer,
  },
});