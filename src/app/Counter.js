import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    decrement: (state,action) => {
        state.value += action.payload;
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

export const { decrement } = counterSlice.actions;

export default counterSlice.reducer;
