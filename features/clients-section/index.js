import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  design: "design1",
  headers: {
    title: "<h1 class='text-2xl font-semibold'>Our Clients</h1>",
    subTitle:
      "<p>Some of the world’s biggest brands trust us with their services</p>",
  },
};

export const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    selectClientsDesign: (state, action) => {
      state.design = `design${action.payload}`;
    },
    editClientTitle: (state, action) => {
      state.headers.title = action.payload;
    },
    editClientSubTitle: (state, action) => {
      state.headers.subTitle = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { editClientSubTitle, editClientTitle, selectClientsDesign } =
  clientsSlice.actions;

export default clientsSlice.reducer;
