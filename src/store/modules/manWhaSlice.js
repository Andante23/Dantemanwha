import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  manWha: [],
  isLoading: false,
  error: null,
};

export const __getData = createAsyncThunk(
  "manWha/getData",

  async (payload, thunkApi) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/anime`
      );
      console.log(data);
      return thunkApi.fulfillWithValue(data.data);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const manWhaSlice = createSlice({
  name: "manWha",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__getData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(__getData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.manWha = action.payload;
      })
      .addCase(__getData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {} = manWhaSlice.actions;
export default manWhaSlice.reducer;
