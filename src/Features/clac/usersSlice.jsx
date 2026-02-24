import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  loading: false,
  error: null,
};
export const fetchDataUsers = createAsyncThunk("users/fetchData", async (x) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users`,
    );
    console.log(response);
    return response.data;
  } catch(error){
     return rejectWithValue(error.message);;
  }
});

const UsersSlice = createSlice({
  name: "Users",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataUsers.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDataUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(fetchDataUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default UsersSlice.reducer;
