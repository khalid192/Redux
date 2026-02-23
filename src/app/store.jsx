import { configureStore } from "@reduxjs/toolkit";
import UsersReducer from "../Features/clac/usersSlice";

export const store = configureStore({
  reducer: {

    users:UsersReducer
  },
});
console.log(store.getState())
