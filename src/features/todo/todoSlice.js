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
        "auth-token": localStorage.getItem("token"),
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});
export const postTodoItems = createAsyncThunk(
  "todo/posttodoitems",
  async (newdata) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/todo/add",
        newdata,
        {
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const updateTodoItems = createAsyncThunk(
  "todo/updatetodoitems",
  async (mydata) => {
    const { data, id } = mydata;
    try {
      const response = await axios.put(
        `http://localhost:4000/api/todo/update/${id}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        }
      );
      console.log(`http://localhost:4000/api/todo/update/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const deleteTodoItems = createAsyncThunk(
  "todo/deletetodoitems",
  async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/todo/delete/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

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

    [postTodoItems.pending]: (state) => {
      state.isLoading = true;
    },
    [postTodoItems.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [postTodoItems.rejected]: (state) => {
      state.isLoading = false;
    },

    [updateTodoItems.pending]: (state) => {
      state.isLoading = true;
    },
    [updateTodoItems.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [updateTodoItems.rejected]: (state) => {
      state.isLoading = false;
    },
    [deleteTodoItems.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteTodoItems.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [deleteTodoItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default todoSlice.reducer;
