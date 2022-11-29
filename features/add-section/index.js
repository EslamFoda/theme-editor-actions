import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  compIndex: 0,
  selectSection: false,
};

export const addSectionsSlice = createSlice({
  name: "addSections",
  initialState,
  reducers: {
    selectSectionOn: (state) => {
      state.selectSection = true;
    },
    selectSectionOff: (state) => {
      state.selectSection = false;
    },
    getNextIndex: (state, action) => {
      state.compIndex = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { selectSectionOn, selectSectionOff, getNextIndex } =
  addSectionsSlice.actions;

export default addSectionsSlice.reducer;
