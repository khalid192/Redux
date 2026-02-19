import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
  value: 0,
};

const calcSlice = createSlice({
  name: "calculator",
  initialState ,
  reducers: {
    plus: (state, action) => {
     state.value = action.payload.number1 + action.payload.number2
    },
    minus: (state,action) => {
     state.value = action.payload.number1 - action.payload.number2
    },
    multiply: (state, action) => {
      state.value = action.payload.number1 * action.payload.number2
    },
    divide: (state, action) => {
      state.value = action.payload.number1 / action.payload.number2
    },
  },
});

export const { plus, minus, multiply, divide } = calcSlice.actions;
export default calcSlice.reducer;