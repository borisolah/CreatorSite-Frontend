// reducers/index.js
import { combineReducers } from "@reduxjs/toolkit";
import loadingReducer from "../redux/slices/loadingSlice";

const rootReducer = combineReducers({
  loading: loadingReducer,
  // other reducers go here
});

export default rootReducer;
