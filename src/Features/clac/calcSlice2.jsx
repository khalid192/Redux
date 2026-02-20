import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
  value: 0,
  lastOperation: null,
  history: [],
};

const calcSlice = createSlice({
  name: "calculator2",
  initialState ,
  reducers: {
    plus1: (state, action) => {
     state.value = action.payload.number1 + action.payload.number2
        state.lastOperation = 'plus'
        state.history.push({
          operation: 'plus',
          number1: action.payload.number1,
          number2: action.payload.number2,
          result: state.value,
        })
     console.log(action)
    },
    minus1: (state,action) => {
     state.value = action.payload.number1 - action.payload.number2
        state.lastOperation = 'minus'
            state.history.push({  
              operation: 'minus',
              number1: action.payload.number1,
              number2: action.payload.number2,
              result: state.value,
            })
    },
    multiply1: (state, action) => {
      state.value = action.payload.number1 * action.payload.number2
        state.lastOperation = 'multiply'
            state.history.push({
              operation: 'multiply',
              number1: action.payload.number1,
              number2: action.payload.number2,
              result: state.value,
            })
    },
    divide1: (state, action) => {
      state.value = action.payload.number1 / action.payload.number2
        state.lastOperation = 'divide'
            state.history.push({
              operation: 'divide',
                number1: action.payload.number1,
                number2: action.payload.number2,
                result: state.value,
            })
    },
  },
});
console.log(calcSlice)
export const { plus1, minus1, multiply1, divide1 } = calcSlice.actions;
export default calcSlice.reducer;