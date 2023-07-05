import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../pagecomponents/authcontrollers/axios";
import store from "../store";
import { setAuth } from "./authSlice";

export const loginUser = createAsyncThunk(
  "login/loginUser",
  async ({ user, pwd }, thunkAPI) => {
    try {
      const response = await axios.post(
        "/auth",
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      store.dispatch(
        setAuth({ user: user, accessToken: response.data.accessToken })
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    loading: false,
    error: null,
    inputUser: "",
    inputPwd: "",
  },

  reducers: {
    setInputUser: (state, action) => {
      state.inputUser = action.payload;
    },
    setInputPwd: (state, action) => {
      state.inputPwd = action.payload;
    },
    clearInputUserPwd: (state) => {
      state.inputUser = "";
      state.inputPwd = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setInputUser, setInputPwd, clearInputUserPwd } =
  loginSlice.actions;

export default loginSlice.reducer;
