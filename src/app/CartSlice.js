import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    value: [],
    totalSell:[],
    logedIn:false
  },
  reducers: {
    cartAddItem: (state, actions) => {
      actions.payload.item = {
        ...actions.payload.item,
        buyQuantity: actions.payload.quantity,
      };
      state.value.push(actions.payload.item);
    },
    cartQuantityHandel:(state,action)=>{
        state.value.find(e=>e.name===action.payload.itemName).buyQuantity=action.payload.quantity
    },
    cartItemDelete:(state,action)=>{
      const index =  state.value.findIndex(e=>e.name===action.payload)
      state.value.splice(index,1)
    },
    totalBuy:(state,action)=>{
        state.value=[]
state.totalSell.push(action.payload)
    },
    logHandel:(state)=>{
      state.logedIn = !state.logedIn
    }
  },
});
export const { cartAddItem ,cartQuantityHandel,cartItemDelete,totalBuy,logHandel} = cartSlice.actions;
export default cartSlice.reducer;
