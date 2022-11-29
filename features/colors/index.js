import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  enableColors: false,
};

export const colorsSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {
    openColors: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.enableColors = true;
    },
    closeColors: (state) => {
      state.enableColors = false;
    },
    toggleColors:(state)=> {
        state.enableColors = !state.enableColors
    }
  },
});

// Action creators are generated for each case reducer function
export const { openColors, closeColors,toggleColors } = colorsSlice.actions;

export default colorsSlice.reducer;
