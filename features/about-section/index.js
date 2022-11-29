import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  design: "design1",
  aboutData: {
    title: "<h1 class='text-4xl font-semibold'>About Us</h1>",
    subTitle:
      "<p>Write about your businesses background, including your history, accomplishments and any awards you may have received. Use this section to show your brand’s personality.</p>",
    btn: "<span>Learn More</span>",
  },
};

export const aboutSlice = createSlice({
  name: "aboutComp",
  initialState,
  reducers: {
    selectAboutDesign: (state, action) => {
      state.design = `design${action.payload}`;
    },
    editAboutTitle: (state, action) => {
      state.aboutData.title = action.payload;
    },
    editAboutSubtitle: (state, action) => {
      state.aboutData.subTitle = action.payload;
    },
    editAboutBtn: (state, action) => {
      state.aboutData.btn = action.payload;
    },
    editSecondaryBtn: (state, action) => {
      state.heroData.secondaryBtn = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  selectAboutDesign,
  editAboutTitle,
  editAboutSubtitle,
  editAboutBtn,
} = aboutSlice.actions;

export default aboutSlice.reducer;
