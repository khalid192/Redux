import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState  ={
  users: [],
  loading: false,
  error: null
}
export const fetchDataUsers = createAsyncThunk( 
  'users/fetchData',
  async (x) => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
       console.log(response)
       return response.data; 
    } catch{
      console.log(error.message)
    }
  }
  
)

const UsersSlice = createSlice({ 
  name: "Users",
  initialState ,
 extraReducers: (builder) => { 
    builder.addCase(fetchDataUsers.fulfilled, (state, action) => {
     state.users = action.payload
    })}
  
});

export default UsersSlice.reducer;