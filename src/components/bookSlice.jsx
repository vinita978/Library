// librarySlice.js
import { createSlice } from "@reduxjs/toolkit";

const librarySlice = createSlice({
  name: "books",
  initialState: [],
  reducers: {
    addNewBook: (state, action) => { 
      state.push({ ...action.payload, id: Date.now() });
    },
    setBooks: (state, action) => {
      return action.payload;
    },
  },
});

export const { addNewBook, setBooks } = librarySlice.actions;
export default librarySlice.reducer;
