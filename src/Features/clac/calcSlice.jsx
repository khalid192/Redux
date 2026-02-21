import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState  = {
  value: 0,
};
export const fetchData = createAsyncThunk( 
  'calculator/fetchData',async (payload) => {
    const response = await fetch(`https://api.example.com/data?number1=${payload.number1}&number2=${payload.number2}`);
    const data = await response.json();
    return data.result;
  }
)

const calcSlice = createSlice({
  name: "calculator",
  initialState ,
  reducers: {
    plus: (state, action) => {
     state.value = action.payload.number1 + action.payload.number2
     console.log(action)
    },
  },
});
console.log(calcSlice)
export const { plus, minus, multiply, divide } = calcSlice.actions;
export default calcSlice.reducer;