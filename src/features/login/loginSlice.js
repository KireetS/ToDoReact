import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  token: "",
  isLoggedin: false,
};
const loginSlice = createSlice({
  name: "login",
  initialState,
});

export default loginSlice;
