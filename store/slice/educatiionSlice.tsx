import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Education from "../../interface/education";
import { getItem, setItem } from "../../utils/localStorage";

const storeEducation = getItem("educations");
const initialState: Education[] = storeEducation || [];

const setEducation = (data: Education[]) => {
  setItem("educations", data);
  return [...data];
};

const educationSlice = createSlice({
  name: "educations",
  initialState,
  reducers: {
    addEducation(state, action: PayloadAction<Education>) {
      const educations = [...state, action.payload];
      return setEducation(educations);
    },
    updateEducation(state, action: PayloadAction<Education>) {
      const index = state.findIndex((education) => education.id === action.payload.id);
      if (index > -1) {
        const educations = state.map((education) =>
          education.id === action.payload.id ? action.payload : education
        );
        return setEducation(educations);
      }
      return [...state];
    },
    deleteEducation(state, action: PayloadAction<string>) {
      const educations = state.filter((education) => education.id !== action.payload);
      return setEducation(educations);
    },
  },
});

export default educationSlice.reducer;

export const { addEducation, updateEducation, deleteEducation } = educationSlice.actions;
