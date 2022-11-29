import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: false,
  addSection: false,
  currentIndex: 0,
};

export const editSectionsSlice = createSlice({
  name: "editSections",
  initialState,
  reducers: {
    toggleEdit: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = !state.value;
    },
    
    addSectionTurnOn: (state) => {
      state.addSection = true;
    },
    addSectionTurnOff: (state) => {
      state.addSection = false;
    },
    getCurrentIndex: (state, action) => {
      state.currentIndex = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  toggleEdit,
  addSectionTurnOn,
  addSectionTurnOff,
  getCurrentIndex,
} = editSectionsSlice.actions;

export default editSectionsSlice.reducer;
