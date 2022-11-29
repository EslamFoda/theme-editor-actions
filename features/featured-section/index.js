import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  design: "design1",
  header: "<h1 class='text-2xl font-semibold text-center'>Features</h1>",
  featuredData: [
    {
      title: "<h2 class=' font-semibold'>Professional Support</h2>",
      desc: " <p>Our team works diligently to ensure that all your questions are answered and your needs met.</p>",
      id: 1,
      btn: "<span>Read More</span>",
    },
    {
      title: "<h2 class=' font-semibold'>Qualified Team</h2>",
      desc: " <p>From designers to developers to writers, our team is equipped with a diverse set of skills.</p>",
      id: 2,
      btn: "<span>Read More</span>",
    },
    {
      title: "<h2 class=' font-semibold'>High Quality Work</h2>",
      desc: " <p>All our work is executed with the highest degree of efficiency.</p>",
      id: 3,
      btn: "<span>Read More</span>",
    },
    {
      title: "<h2 class=' font-semibold'>Detail-oriented approach</h2>",
      desc: " <p>We focus on every aspect of our clients’ needs to leave nothing to chance.</p>",
      id: 4,
      btn: "<span>Read More</span>",
    },
  ],
};

export const featuredSlice = createSlice({
  name: "featured",
  initialState,
  reducers: {
    selectFeaturedDesign: (state, action) => {
      state.design = `design${action.payload}`;
    },
    editFeaturedTitle: (state, action) => {
      const updateTitle = state.featuredData.map((feat) =>
        feat.id === action.payload.id
          ? { ...feat, title: action.payload.value }
          : feat
      );

      state.featuredData = updateTitle;
    },
    editFeaturedDesc: (state, action) => {
      const updateDesc = state.featuredData.map((feat) =>
        feat.id === action.payload.id
          ? { ...feat, desc: action.payload.value }
          : feat
      );

      state.featuredData = updateDesc;
    },
    editFeaturedBtn: (state, action) => {
      const updateBtn = state.featuredData.map((feat) =>
        feat.id === action.payload.id
          ? { ...feat, btn: action.payload.value }
          : feat
      );
      state.featuredData = updateBtn;
    },
    editFeaturedHeader: (state, action) => {
      state.header = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  selectFeaturedDesign,
  editFeaturedTitle,
  editFeaturedDesc,
  editFeaturedBtn,
  editFeaturedHeader,
} = featuredSlice.actions;

export default featuredSlice.reducer;
