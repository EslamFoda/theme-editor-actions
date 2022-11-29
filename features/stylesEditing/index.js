import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  stylesEditor: false,
  fontEdit: false,
  editEffects: false,
};

export const stylesSlice = createSlice({
  name: "stylesEdit",
  initialState,
  reducers: {
    stylesEditorOn: (state) => {
      state.stylesEditor = true;
    },
    stylesEditorOff: (state) => {
      state.stylesEditor = false;
    },
    toggleStylesEditor: (state) => {
      state.stylesEditor = !state.stylesEditor;
    },
    fontEditOn: (state) => {
      state.fontEdit = true;
    },
    fontEditOff: (state) => {
      state.fontEdit = false;
    },
    toggleFontEdit: (state) => {
      state.stylesEditor = !state.fontEdit;
    },
    editEffectsOn: (state) => {
      state.editEffects = true;
    },
    editEffectsOff: (state) => {
      state.editEffects = false;
    },
    toggleEditEffects: (state) => {
      state.editEffects = !state.editEffects;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  toggleStylesEditor,
  stylesEditorOn,
  stylesEditorOff,
  fontEditOn,
  fontEditOff,
  toggleFontEdit,
  editEffectsOn,
  editEffectsOff,
  toggleEditEffects,
} = stylesSlice.actions;

export default stylesSlice.reducer;
