import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  editImage: false,
  itemIndex: "",
  compIndex: "",
};

export const editImgSlice = createSlice({
  name: "editImg",
  initialState,
  reducers: {
    toggleEditImg: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.editImage = !state.editImage;
    },

    editImgOn: (state) => {
      state.editImage = true;
    },
    editImgOff: (state) => {
      state.editImage = false;
    },
    getItemIndex: (state, action) => {
      state.itemIndex = action.payload;
    },
    getCompIndex: (state, action) => {
      state.compIndex = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleEditImg, editImgOn, editImgOff, getItemIndex, getCompIndex } =
  editImgSlice.actions;

export default editImgSlice.reducer;
