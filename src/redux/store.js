import { configureStore } from "@reduxjs/toolkit";
import addBookmarkSlice from "./features/addBlogSlice/addBookmarkSlice";

export const store = configureStore({
  reducer: {
    addbookmark: addBookmarkSlice,
  },
});
