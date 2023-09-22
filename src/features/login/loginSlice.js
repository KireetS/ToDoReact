import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const isTokenValid = () => {
  const token = localStorage.getItem("token");
  return token !== null && token !== "undefined";
};

const initialState = {
  isLoading: true,
  error: false,
  login: isTokenValid(),
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
    localStorage.setItem("token", resp.data.token);
    console.log(resp.data);
    if (resp.status >= 200 || resp.status < 300) {
      return 1;
    } else {
      return -1;
    }
  } catch (err) {
    console.error("error logging in ", err);
    throw err;
  }
});
const loginSlice = createSlice({
  name: "login",
  initialState,

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

export default loginSlice.reducer;
