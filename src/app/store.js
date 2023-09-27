import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./../features/todo/todoSlice";
import signupReducer from "../features/signup/signupSlice";
import loginReducer from "../features/login/loginSlice";
import updateReducer from "../features/update/updateSlice";
import userReducer from "../features/user/userSlice";
const store = configureStore({
  reducer: {
    todo: todoReducer,
    signup: signupReducer,
    login: loginReducer,
    update: updateReducer,
    user: userReducer,
  },
});

export default store;
