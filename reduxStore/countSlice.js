import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "storeCount",
  initialState,
  reducers: {
    changeCount(state, action) {
      state.value = action.payload;
    },
  },
});

export const { changeCount } = counterSlice.actions;

export default counterSlice.reducer;
