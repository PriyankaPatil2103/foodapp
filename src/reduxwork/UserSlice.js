import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  UserData: {},
  IsRegister: false,
  IsLogin: false,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.UserData = {};
      state.IsLogin = false;
    },
    login: (state, action) => {
      state.UserData = action.payload;
      state.IsLogin = true;
    },
    register: (state, action) => {
      state.UserData = action.payload;
      state.IsRegister = true;
    },
  },
});

export const { register, login, logout } = UserSlice.actions;
export default UserSlice.reducer;
