import { configureStore } from "@reduxjs/toolkit";
import getPost from "../features/postsSlice";

export const store = configureStore({
  reducer: {
    app:getPost,
  },
});