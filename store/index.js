import { configureStore } from "@reduxjs/toolkit";
import widthReducer from "../features/main-width";

export const store = configureStore({
  reducer: {
    mainWidth: widthReducer,
  },
});
