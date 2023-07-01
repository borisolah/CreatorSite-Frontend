import { combineReducers } from "@reduxjs/toolkit";
import loadingReducer from "../slices/loadingSlice";
import authReducer from "../slices/authSlice";
import registerReducer from "../slices/registerSlice";

const rootReducer = combineReducers({
  loading: loadingReducer,
  auth: authReducer,
  register: registerReducer,

  // other reducers go here
});

export default rootReducer;
