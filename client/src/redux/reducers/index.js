import { combineReducers } from "@reduxjs/toolkit";
import loadingReducer from "../slices/loadingSlice";
import authReducer from "../slices/authSlice";
import registerReducer from "../slices/registerSlice";
import loginReducer from "../slices/loginSlice";

const rootReducer = combineReducers({
  loading: loadingReducer,
  auth: authReducer,
  register: registerReducer,
  login: loginReducer,
});

export default rootReducer;
