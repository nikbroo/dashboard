import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemState: [],
  itemDep: [],
};

export const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    itemStateDispatch: (state, action) => {
      state.itemState = action.payload;
    },
    itemDepDispatch: (state, action) => {
      state.itemDep = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { itemStateDispatch, itemDepDispatch } = itemSlice.actions;

export default itemSlice.reducer;
