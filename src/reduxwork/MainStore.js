import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userReducer from "./UserSlice";
import cartReducer from "./CartSlice";

const rootReducer=combineReducers({
  cart:cartReducer,
  user:userReducer
})
export const MainStore = configureStore({
  reducer: rootReducer,
});
