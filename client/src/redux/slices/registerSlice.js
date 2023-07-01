import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../pagecomponents/authcontrollers/axios";

export const registerUser = createAsyncThunk(
  "register/registerUser",
  async ({ email, username, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post("/register", {
        email,
        username,
        password,
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const registerSlice = createSlice({
  name: "register",
  initialState: { user: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default registerSlice.reducer;
