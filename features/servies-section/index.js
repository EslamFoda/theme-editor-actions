import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  design: "design1",
  servicesData: [
    {
      pic: "https://images.unsplash.com/photo-1516728043722-b394cb2f689e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c82882f6f384a30402cc75029d9e7b11&auto=format&fit=crop&w=550&q=80",
      title: "<h3 class='text-2xl font-semi-bold'>SEM Marketing</h3>",
      desc: "<p>We develop comprehensive PPC and SEO strategies. We’ll provide your AdWords account with continuous PPC support that is monitored to adapt to the evolving industry.</p>",
      id: 1,
      btn: "<span>READ MORE</span>",
    },
    {
      pic: "https://images.unsplash.com/photo-1519120126473-8be7aedcd6c6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a55332dfc236b13f118ef77a36b4052f&auto=format&fit=crop&w=550&q=80",
      title: "<h3 class='text-2xl font-semi-bold'>Social Media Marketing</h3>",
      desc: "<p>Our team works to expand your social media presence by creating compelling content designed for you. boost your social media audience and develop a strong community around your brand.</p>",
      id: 2,
      btn: "<span>READ MORE</span>",
    },
    {
      pic: "https://images.unsplash.com/photo-1496902526517-c0f2cb8fdb6a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8a8623f526569e949b73c4c7360d4532&auto=format&fit=crop&w=550&q=80",

      title: "<h3 class='text-2xl font-semi-bold'>Content Marketing</h3>",
      desc: "<p>Our writers are wordsmiths trained in creating quality content for all aspects of your brand. We’ll take care of your website copy, SEO articles, blog posts, whitepapers and more.</p>",
      btn: "<span>READ MORE</span>",
      id: 3,
    },
  ],
  headers: {
    title: "<h1 class='text-2xl font-semibold'>Our Services</h1>",
    subTitle:
      "<p>We offer top-notch services based on countless years of experience.</p>",
  },
};

export const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    selectServicesDesign: (state, action) => {
      state.design = `design${action.payload}`;
    },
    editServiceTitle: (state, action) => {
      const updateTitle = state.servicesData.map((service) =>
        service.id === action.payload.id
          ? { ...service, title: action.payload.value }
          : service
      );

      state.servicesData = updateTitle;
    },
    editServiceDesc: (state, action) => {
      const updateDesc = state.servicesData.map((service) =>
        service.id === action.payload.id
          ? { ...service, desc: action.payload.value }
          : service
      );

      state.servicesData = updateDesc;
    },
    editServiceBtn: (state, action) => {
      const updateBtn = state.servicesData.map((service) =>
        service.id === action.payload.id
          ? { ...service, btn: action.payload.value }
          : service
      );

      state.servicesData = updateBtn;
    },
    editServiceHeadTitle: (state, action) => {
      state.headers.title = action.payload;
    },
    editServiceSubTitle: (state, action) => {
      state.headers.subTitle = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  selectServicesDesign,
  editServiceTitle,
  editServiceDesc,
  editServiceBtn,
  editServiceHeadTitle,
  editServiceSubTitle
} = servicesSlice.actions;

export default servicesSlice.reducer;
