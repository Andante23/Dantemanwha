import { configureStore } from "@reduxjs/toolkit";
import manWhaSlice from "../modules/manWhaSlice";

const store = configureStore({
  reducer: manWhaSlice,
});

export default store;
