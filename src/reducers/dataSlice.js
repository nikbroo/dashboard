import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataState: [],
  searchState: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    filterDispatch: (state, action) => {
      state.dataState = action.payload;
    },
    searchDispatch: (state, action) => {
      state.searchState = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { filterDispatch, searchDispatch } = dataSlice.actions;

export default dataSlice.reducer;
