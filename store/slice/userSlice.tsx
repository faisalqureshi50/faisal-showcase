import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../../interface/user";
import { getItem, setItem } from "../../utils/localStorage";

const storeUser = getItem("user");
const initialState: User = storeUser || { name: "" };

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      const user = { ...state, ...action.payload };
      setItem("user", user);
      return user;
    },
  },
});

export const { setUser } = user.actions;

export default user.reducer;
