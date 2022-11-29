import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  width: "100%",
  device: "desktop",
};

export const widthSlice = createSlice({
  name: "mainWidth",
  initialState,
  reducers: {
    changeWidth: (state, action) => {
      state.width = action.payload;
    },
    changeDevice: (state, action) => {
      state.device = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeWidth, changeDevice } = widthSlice.actions;

export default widthSlice.reducer;
