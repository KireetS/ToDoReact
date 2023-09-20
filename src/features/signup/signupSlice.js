import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  isLoading: true,
  error: false,
};

export const signup = createAsyncThunk("singup/add", async (userdata) => {
  try {
    const resp = await axios.post(
      "http://localhost:4000/api/auth/create",
      userdata,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return resp.data;
  } catch (err) {
    console.error("error logging in ", err);
    throw err;
  }
});
const signupSlice = createSlice({
  name: "signup",
  initialState,
  extraReducers: {
    [signup.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [signup.fulfilled]: (state) => {
      console.log("fulfilled");
      state.isLoading = false;
      state.error = false;
    },
    [signup.rejected]: (state) => {
      console.log("rejected");
      state.isLoading = false;
      state.error = true;
    },
  },
});

export default signupSlice.reducer;
