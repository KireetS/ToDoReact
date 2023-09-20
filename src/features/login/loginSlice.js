import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: true,
  error: false,
  token: "",
};

export const login = createAsyncThunk("login/", async (userdata) => {
  try {
    const resp = await axios.post(
      "http://localhost:4000/api/auth/login",
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
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [login.fulfilled]: (state) => {
      console.log("fulfilled");
      state.isLoading = false;
      state.error = false;
    },
    [login.rejected]: (state) => {
      console.log("rejected");
      state.isLoading = false;
      state.error = true;
    },
  },
});
export const { addToken } = loginSlice.actions;
export default loginSlice.reducer;
