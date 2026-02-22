import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState  = {
  value: 0,
  weather: {
    temp: null,
    main: null,
    description: null
  }
};
export const fetchData = createAsyncThunk( 

  'calculator/fetchData',

  async (x) => {
    if(x.pylod === "plus"){
      return x.number1 + x.number2
    }
      else if(x.pylod === "minus"){
        return x.number1 - x.number2
      }
      else if(x.pylod === "multiply"){
        return x.number1 * x.number2
      }
      else if(x.pylod === "divide"){
        return x.number1 / x.number2
      }
  }
)

const calcSlice = createSlice({
  name: "calculator",
  initialState ,
 extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.value = action.payload
    })}
  
});
console.log(calcSlice)
export const { plus, minus, multiply, divide } = calcSlice.actions;
export default calcSlice.reducer;