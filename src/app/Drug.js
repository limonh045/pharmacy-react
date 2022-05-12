import { createSlice } from "@reduxjs/toolkit";
import drugsData from "../data/drugsData";
export const drugSlice = createSlice({
  name: "Drug",
  initialState: {
    value: [...drugsData],
  },
  reducers: {
    deleteDrug: (state, action) => {
      const indexSelected = state.value.findIndex(
        (e) => e.name === action.payload.name
      );
      state.value.splice(indexSelected, 1);
    },
    addvendor: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    editDrug: (state, action) => {
      const indexSelected = state.value.findIndex(
        (e) => e.name === action.payload.selectedDrug.name
      );
      state.value[indexSelected] = action.payload.drugValue;
    },
  },
});
export const { deleteDrug, addvendor, editDrug } = drugSlice.actions;
export default drugSlice.reducer;
