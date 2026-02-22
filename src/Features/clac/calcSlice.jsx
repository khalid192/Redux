import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState  = {
  value: 0,
};
export const fetchData = createAsyncThunk( 
  'calculator/fetchnpm Data',async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Agadir&units=metric&appid=3d4c2bf9a6c0fd81dde9d9f1c955e217`);
    const data = await response.json();
    console.log(data)
    return data;
  },
    'calculator/fetchnpm',async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Agadir&units=metric&appid=3d4c2bf9a6c0fd81dde9d9f1c955e217`);
    const data = await response.json();
    console.log(data)
    return data;
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
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.value = action.payload.main.temp
    });}
});
console.log(calcSlice)
export const { plus, minus, multiply, divide } = calcSlice.actions;
export default calcSlice.reducer;