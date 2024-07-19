import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../models/user";

///defaut value
const initialState: null | User = null;

const userSlice = createSlice({
  name: "user",
  initialState, //=>  initialState:  initialState
  reducers: {
    login: (state,action)=> action.payload,//=== user
    logout: () => initialState,
  },
});
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
