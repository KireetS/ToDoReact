import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  isDone: false,
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
  }
});
const signupSlice = createSlice({
  name: "signup",
  initialState,
  extraReducers: {
    [signup.pending]: (state) => {
      state.isDone = true;
    },
    [signup.fulfilled]: (state) => {
      state.isDone = false;
    },
    [signup.rejected]: (state) => {
      state.isDone = false;
    },
  },
});

export default signupSlice.reducer;
