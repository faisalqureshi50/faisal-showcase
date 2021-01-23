import { combineReducers } from "@reduxjs/toolkit";
import educations from "./slice/educatiionSlice";
import user from "./slice/userSlice";

const rootReducer = combineReducers({
  educations,
  user,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
