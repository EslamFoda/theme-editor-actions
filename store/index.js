import { configureStore } from "@reduxjs/toolkit";
import heroReducer from "../features/hero/index";
import aboutReducer from "../features/about-section/index";
import featuredReducer from "../features/featured-section";
import servicesReducer from "../features/servies-section";
import teamReducer from "../features/team-section";
import clientsReducer from "../features/clients-section";
import editSectionsReducer from "../features/edit-sections";
import compNameReducer from "../features/comp-name";
import addSectionReducer from "../features/add-section";
import widthReducer from "../features/main-width";
import galleryReducer from "../features/gallery-section";
import testiReducer from "../features/testi";
import colorsReducer from "../features/colors";
import editImgReducer from "../features/edit-image";
import fileReducer from "../features/my-files";
import stylesReducer from "../features/stylesEditing";
import footerReducer from "../features/footer-section";
export const store = configureStore({
  reducer: {
    hero: heroReducer,
    aboutComp: aboutReducer,
    featured: featuredReducer,
    services: servicesReducer,
    team: teamReducer,
    editSections: editSectionsReducer,
    compName: compNameReducer,
    addSections: addSectionReducer,
    mainWidth: widthReducer,
    clients: clientsReducer,
    gallery: galleryReducer,
    testi: testiReducer,
    colors: colorsReducer,
    editImg: editImgReducer,
    files: fileReducer,
    stylesEdit: stylesReducer,
    footerComp: footerReducer,
  },
});
