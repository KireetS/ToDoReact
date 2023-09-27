import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: {},
  isLoading: true,
};

export const getUser = createAsyncThunk("request/getUser", async () => {
  try {
    const resp = await axios.get("http://localhost:4000/api/auth/getuser", {
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    return resp.data;
  } catch (err) {
    console.error("error logging in ", err);
    throw err;
  }
});
const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [getUser.pending]: (state) => {
      state.isLoading = true;
    },
    [getUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      console.log(action);
    },
    [getUser.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default userSlice.reducer;
