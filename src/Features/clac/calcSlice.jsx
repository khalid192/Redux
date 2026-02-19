import { createSlice } from "@reduxjs/toolkit";

const result = {
  value: 0,
};

const counterSlice = createSlice({
  name: "calculator",
  result,
  reducers: {
    plus: (state, action) => {
     state= action.payload.number1 + action.payload.number1
    },
    minus: (state) => {
      state.value -= 1;
    },
    multiply: (state, action) => {
      state.value *= action.payload;
    },
    divide: (state, action) => {
      state.value /= action.payload;
    },
  },
});

export const { plus, minus, multiply, divide } = counterSlice.actions;
export default counterSlice.reducer;