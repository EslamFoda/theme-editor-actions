import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  editFiles: false,
};

export const filesSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    filesOn: (state) => {
      state.editFiles = true;
    },
    filesOff: (state) => {
      state.editFiles = false;
    },
    toggleEditFile: (state) => {
      state.editFiles = !state.editFiles;
    },
  },
});

// Action creators are generated for each case reducer function
export const { filesOff, filesOn,toggleEditFile } = filesSlice.actions;

export default filesSlice.reducer;
