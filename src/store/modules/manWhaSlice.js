import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const manWhaSlice = createSlice({
  name: "manWha",
  initialState,
  reducers: {
    getData(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const { getData } = manWhaSlice.actions;
export default manWhaSlice.reducer;
