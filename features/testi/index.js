import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  design: "design1",
  testiData: [
    {
      id: 1,
      pic: "https://images.unsplash.com/photo-1486314547704-d16929b8a2af?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c2d5d9be0196706bc93d37ecd2217c11&auto=format&fit=crop&w=500&q=80",
      userName: "<h3 class='text-2xl font-semibold'>salma</h3>",
      position:
        "<span class='block text-sm font-semibold'>CEO / Newzify</span>",
      review:
        " <p class='text-sm'>“I honestly could not be more pleased with this product. So creative and helpful.”</p>",
    },
    {
      id: 2,
      pic: "https://images.unsplash.com/photo-1511079727166-22288ec84472?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fd72794d86c3e3559e56e0a6706a4599&auto=format&fit=crop&w=500&q=80",
      userName: "<h3 class='text-2xl font-semibold'>chris</h3>",
      position:
        "<span class='block text-sm font-semibold'>Art Director / Boomerangs</span>",
      review:
        " <p class='text-sm'>“I’ve never been more impressed with any other product before. I’ve tried so many of the other ones, and this is truly the one that stands out the most.”</p>",
    },
    {
      id: 3,
      pic: "https://images.unsplash.com/photo-1516486609688-38da8f268743?ixlib=rb-0.3.5&s=9d6987c2bf554dc4c0de1209c6e08b1c&auto=format&fit=crop&w=500&q=80",
      userName: "<h3 class='text-2xl font-semibold'>Cara</h3>",
      position:
        "<span class='block text-sm font-semibold'>Co-Founder / Beeply</span>",
      review:
        " <p class='text-sm'>“Avivo has been wonderful. They have the best customer service and always go above and beyond to answer my questions and make sure my needs are met.”</p>",
    },
    {
      id: 4,
      pic: "https://images.unsplash.com/photo-1516486609688-38da8f268743?ixlib=rb-0.3.5&s=9d6987c2bf554dc4c0de1209c6e08b1c&auto=format&fit=crop&w=500&q=80",
      userName: "<h3 class='text-2xl font-semibold'>Charlie Mendoza</h3>",
      position:
        "<span class='block text-sm font-semibold'>Co-Founder / Beeply</span>",
      review:
        " <p class='text-sm'>“Avivo has been wonderful. They have the best customer service and always go above and beyond to answer my questions and make sure my needs are met.”</p>",
    },
  ],
  headers: {
    title: "<h1 class='text-2xl font-semibold'>What Our Clients Say</h1>",
    subTitle:
      "<p>Hundreds of customers rely on our services. See what they have to say.</p>",
  },
};

export const testiSlice = createSlice({
  name: "testi",
  initialState,
  reducers: {
    selectTestiDesign: (state, action) => {
      state.design = `design${action.payload}`;
    },
    editTestiUserName: (state, action) => {
      const updateUserName = state.testiData.map((client) =>
        client.id === action.payload.id
          ? { ...client, userName: action.payload.value }
          : client
      );

      state.testiData = updateUserName;
    },
    editTestiPosition: (state, action) => {
      const updatePosition = state.testiData.map((client) =>
        client.id === action.payload.id
          ? { ...client, position: action.payload.value }
          : client
      );

      state.testiData = updatePosition;
    },
    editTestiReview: (state, action) => {
      const updateReview = state.testiData.map((client) =>
        client.id === action.payload.id
          ? { ...client, review: action.payload.value }
          : client
      );

      state.testiData = updateReview;
    },
    editTestiTitle: (state, action) => {
      state.headers.title = action.payload;
    },
    editTestiSubTitle: (state, action) => {
      state.headers.subTitle = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  selectTestiDesign,
  editTestiUserName,
  editTestiPosition,
  editTestiReview,
  editTestiTitle,
  editTestiSubTitle,
} = testiSlice.actions;

export default testiSlice.reducer;
