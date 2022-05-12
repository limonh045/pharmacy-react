import { createSlice } from "@reduxjs/toolkit";
import vendors from "../data/vendors";
export const vendorSlice = createSlice({
  name: "Vendor",
  initialState: {
    value: [...vendors],
  },
  reducers: {
    deleteVender: (state, action) => {
      const indexSelected = state.value.findIndex(
        (e) => e.name === action.payload.name
      );
      state.value.splice(indexSelected, 1);
    },
    editVendor:(state,action)=>{
        const indexSelected = state.value.findIndex(
            (e) => e.name === action.payload.selectedvendor.name
          );
          state.value[indexSelected] = action.payload.vendorValue;
    },
    addVendors:(state,action)=>{
        state.value = [...state.value,action.payload]
    }
  },
});
export const { deleteVender,editVendor,addVendors } = vendorSlice.actions;
export default vendorSlice.reducer;
