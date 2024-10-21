import { configureStore } from "@reduxjs/toolkit";
import { postSlice } from "../redux/postSlice";




export const store = configureStore({
  reducer: {
    postSlice: postSlice.reducer
  }
});