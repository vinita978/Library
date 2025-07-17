import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../components/bookSlice";

const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});

export default store;
