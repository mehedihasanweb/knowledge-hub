import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarks: [],
  readingTimes: 0,
};

const addBookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    addBookmark: (state, { payload }) => {
      // console.log(payload);
      const insteadBookmark = state.bookmarks?.find(
        (item) => item.id === payload.id
      );
      if (!insteadBookmark) {
        const newBookmarks = [...state.bookmarks, payload];
        state.bookmarks = newBookmarks;
        state.readingTimes += payload.reading_time;
      } else {
        const remaining = state.bookmarks.filter(
          (item) => item.id !== payload.id
        );
        state.bookmarks = remaining;
        state.readingTimes -= payload.reading_time;
      }
    },
  },
});

export const { addBookmark } = addBookmarkSlice.actions;

export default addBookmarkSlice.reducer;
