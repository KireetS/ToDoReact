import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: true,
  error: false,
  profileImage: "",
};

export const update = createAsyncThunk("update/", async (userdata) => {
  try {
    const resp = await axios.put(
      "http://localhost:4000/api/auth/update",
      userdata,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    console.log(resp.data);
    return resp.data;
  } catch (err) {
    console.error("error updating in ", err);
    throw err;
  }
});
const updateSlice = createSlice({
  name: "update",
  initialState,

  extraReducers: {
    [update.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [update.fulfilled]: (state, action) => {
      console.log("fulfilled");
      state.isLoading = false;
      state.error = false;
      state.profileImage = action.payload.profileImage;
    },
    [update.rejected]: (state) => {
      console.log("rejected");
      state.isLoading = false;
      state.error = true;
    },
  },
});

export default updateSlice.reducer;
