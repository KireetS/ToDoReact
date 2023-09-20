import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./../features/todo/todoSlice";
import signupReducer from "../features/signup/signupSlice";
import loginReducer from "../features/login/loginSlice";
const store = configureStore({
  reducer: {
    todo: todoReducer,
    signup: signupReducer,
    login: loginReducer,
  },
});

export default store;
