import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../pagecomponents/authcontrollers/axios";

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    await axios("/logout", { withCredentials: true });
  } catch (err) {
    console.error(err);
  }
});

const initialState = {
  user: null,
  accessToken: localStorage.getItem("authToken") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      localStorage.setItem("authToken", action.payload.accessToken);
    },
    clearAuth: (state) => {
      state.user = null;
      state.accessToken = null;
      localStorage.removeItem("authToken");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout.fulfilled, (state) => {
      state.user = null;
      state.accessToken = null;
      localStorage.removeItem("authToken");
    });
  },
});

export const { setAuth, clearAuth } = authSlice.actions;

export default authSlice.reducer;
