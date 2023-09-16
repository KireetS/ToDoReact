import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./../features/todo/todoSlice";
import signupReducer from "../features/signup/signupSlice";
const store = configureStore({
  reducer: {
    todo: todoReducer,
    signup: signupReducer,
  },
});

export default store;
