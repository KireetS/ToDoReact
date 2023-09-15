import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todoItems: [],
  total: 0,
  isLoading: true,
};
export const getTodoItems = createAsyncThunk("todo/gettodoitems", async () => {
  try {
    const response = await axios.get("http://localhost:4000/api/todo/get", {
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwMmEyMmRkNjdkNzYwZTVkMzM2YWFjIn0sImlhdCI6MTY5NDY3MTQwNX0.OCZv2vL6xRe0xaEcO1ZMZ25ZnVHjFbTAnSxMpS00d2I",
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});
const todoSlice = createSlice({
  name: "todo",
  initialState,
  extraReducers: {
    [getTodoItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getTodoItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todoItems = action.payload;
      console.log(action);
    },
    [getTodoItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default todoSlice.reducer;
