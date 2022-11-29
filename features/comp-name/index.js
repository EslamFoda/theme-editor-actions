import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  compName: "",
};

export const compNameSlice = createSlice({
  name: "compName",
  initialState,
  reducers: {
    selectCompName: (state, action) => {
      state.compName = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { selectCompName } = compNameSlice.actions;

export default compNameSlice.reducer;
