import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./UserSlice";

export const MainStore = configureStore({
  reducer: userReducer,
});
