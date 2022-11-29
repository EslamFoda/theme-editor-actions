import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  design: "design1",
  teamData: [
    {
      userName:
        "<h2 class='text-primary text-2xl font-semibold'>Angelica Johnson</h2>",
      id: 1,
      position: " <h3 class='font-semibold'>Founder & CEO</h3>",
      pic: "https://assets.wuiltsite.com/defaults/angelika-johnson.jpg",
      about:
        "<p class='text-sm'>Angelica Johnson studied business at University of Southern California. She has lead multiple startups including Culdin, Mifi, and Purity.</p>",
    },
    {
      userName:
        "<h2 class='text-primary text-2xl font-semibold'>Peter Thomas</h2>",
      id: 2,
      position: " <h3 class='font-semibold'>Chief Finance Officer</h3>",
      pic: "https://assets.wuiltsite.com/defaults/peter.jpg",
      about:
        "<p class='text-sm'>Peter Thomas is the author of four books, including the New York Times bestseller, “Walking Down Wall Street,” inspired by 10 years of working on Wall Street.</p>",
    },
    {
      userName:
        "<h2 class='text-primary text-2xl font-semibold'>Maria Rodriguez</h2>",
      id: 3,
      position: " <h3 class='font-semibold'>Marketing Director</h3>",
      pic: "https://assets.wuiltsite.com/defaults/maria.jpg",
      about:
        "<p class='text-sm'>Maria Rodriquez is best known for co-founding Cherry Innovation, a marketing strategy firm. She has written for the Wall Street Journal, The New York Times, and The Atlantic.</p>",
    },
    {
      userName:
        "<h2 class='text-primary text-2xl font-semibold'>Bradley Hanson</h2>",
      id: 4,
      position:
        " <h3 class='font-semibold'>Senior Vice President of Design</h3>",
      pic: "https://assets.wuiltsite.com/defaults/bradely.jpg",
      about:
        "<p class='text-sm'>Bradley Hanson grew up in Newton, Massachusetts, and graduated from the University of Massachusetts at Amherst with a degree in Graphic Design.</p>",
    },
  ],
  headers: {
    title: "<h1 class='text-2xl font-semibold'>Our Team</h1>",
    subTitle:
      "<p>We’re led by a team who is always thinking, always creating, and always pushing forward.</p>",
  },
};

export const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    selectTeamDesign: (state, action) => {
      state.design = `design${action.payload}`;
    },
    editTeamUserName: (state, action) => {
      const updateUserName = state.teamData.map((team) =>
        team.id === action.payload.id
          ? { ...team, userName: action.payload.value }
          : team
      );

      state.teamData = updateUserName;
    },
    editTeamUserPosition: (state, action) => {
      const updatePosition = state.teamData.map((team) =>
        team.id === action.payload.id
          ? { ...team, position: action.payload.value }
          : team
      );

      state.teamData = updatePosition;
    },
    editTeamAbout: (state, action) => {
      const updateAbout = state.teamData.map((team) =>
        team.id === action.payload.id
          ? { ...team, about: action.payload.value }
          : team
      );

      state.teamData = updateAbout;
    },
    editTeamTitle: (state, action) => {
      state.headers.title = action.payload;
    },
    editTeamSubTitle: (state, action) => {
      state.headers.subTitle = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  selectTeamDesign,
  editTeamUserName,
  editTeamAbout,
  editTeamSubTitle,
  editTeamTitle,
  editTeamUserPosition,
} = teamSlice.actions;

export default teamSlice.reducer;
