import { configureStore } from "@reduxjs/toolkit";
import calcrReducer from "../Features/clac/calcSlice";
import calcrReducer2 from "../Features/clac/calcSlice2";

export const store = configureStore({
  reducer: {
    calculator: calcrReducer,
    calculator2: calcrReducer2,
  },
});
console.log(store.getState())
