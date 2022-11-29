import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  design: "design1",
  heroData: {
    title:
      "<p class='text-3xl mb-5'>clothes is a leading business in the clothes industry</p>",
    subTitle:
      "<span class='tinymce-header'>Learn about our services and join our community today </span>",
    primaryBtn: "<span>shop now</span>",
    secondaryBtn: "<span>Learn More</span>",
  },
};

export const heroSlice = createSlice({
  name: "hero",
  initialState,
  reducers: {
    selectHeroDesign: (state, action) => {
      state.design = `design${action.payload}`;
    },
    editHeroTitle: (state, action) => {
      state.heroData.title = action.payload;
    },
    editHeroSubtitle: (state, action) => {
      state.heroData.subTitle = action.payload;
    },
    editPrimaryBtn: (state, action) => {
      state.heroData.primaryBtn = action.payload;
    },
    editSecondaryBtn: (state, action) => {
      state.heroData.secondaryBtn = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  selectHeroDesign,
  editHeroTitle,
  editHeroSubtitle,
  editPrimaryBtn,
  editSecondaryBtn,
} = heroSlice.actions;

export default heroSlice.reducer;
