import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  CartItems: [],
  ItemCount: 0,
  TotalAmount: 0,
};
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.CartItems = [];
      state.ItemCount = 0;
    },
    addItem: (state, action) => {
      const newItem = { ...action.payload, Qty: 1 };

      const isExist = state.CartItems.some((itm) => itm._id === newItem._id);

      if (isExist) {
        alert("Already Added");
      } else {
        state.CartItems = [...state.CartItems, newItem];
        state.ItemCount = state.CartItems.length;
      }
    },
    removeItem:(state,action)=>{
      state.CartItems=state.CartItems.filter((item)=>item._id !==action.payload._id);
      state.ItemCount=state.CartItems.length;
    },
    incrementQty: (state, { payload }) => {
      const crtItem = state.CartItems.find((item) => item._id === payload.iid);
      crtItem.Qty += 1;
    },
    decrementQty: (state, { payload }) => {
      const crtItem = state.CartItems.find((item) => item._id === payload.iid);

      if (crtItem.Qty === 0) {
        state.CartItems = state.CartItems.filter(
          (item) => item._id !== payload.iid
        );
        state.ItemCount=state.CartItems.length
      } else {
        crtItem.Qty -= 1;
      }
    },
    calculateTotal:(state)=>{
      let totalQty=0;
      let totalamt=0;
      state.CartItems.forEach((item)=>{
        totalQty+=item.Qty;
        totalamt+=item.Qty*item.FoodPrice;
      });
      state.CartTotalAmt=totalamt;
    }
  },
});
export const { clearCart, addItem, incrementQty, decrementQty,calculateTotal,removeItem } =
  CartSlice.actions;
export default CartSlice.reducer;
