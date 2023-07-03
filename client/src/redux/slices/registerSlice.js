import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../pagecomponents/authcontrollers/axios";
import store from "../store";
import { loginUser } from "./loginSlice";

export const registerUser = createAsyncThunk(
  "register/registerUser",
  async ({ email, username, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post("/register", {
        email,
        username,
        password,
      });
      store.dispatch(loginUser({ user: username, pwd: password }));
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const registerSlice = createSlice({
  name: "register",
  initialState: {
    user: null,
    loading: false,
    error: null,
    email: "",
    username: "",
    password: "",
    repeatPassword: "",
    isMatching: true,
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setRepeatPassword: (state, action) => {
      state.repeatPassword = action.payload;
      state.isMatching = action.payload === state.password;
    },
    clearFields: (state) => {
      state.email = "";
      state.username = "";
      state.password = "";
      state.repeatPassword = "";
      state.isMatching = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.password = "";
        state.repeatPassword = "";
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setEmail,
  setUsername,
  setPassword,
  setRepeatPassword,
  clearFields,
} = registerSlice.actions;

export default registerSlice.reducer;
