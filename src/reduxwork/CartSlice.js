import { createSlice } from "@reduxjs/toolkit";

const initialState={
    CartItems:[],
    ItemCount:0,
    TotalAmount:0,
};
const CartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        clearCart:(state)=>{
            state.CartItems=[];
            state.ItemCount=0;
        },
        addItem:(state,action)=>{
            const newItem={ ...action.payload,Qty:1};
            state.CartItems=[ ...state.CartItems,newItem];
            state.ItemCount=state.CartItems.length;
        },
        incrementQty:(state,{payload})=>{
            const crtItem=state.CartItems.find((item)=>item._id===payload.iid);
            crtItem.Qty+=1;

        },
        decrementQty:(state,{payload})=>{
            const crtItem=state.CartItems.find((item)=>item._id===payload.iid);
            crtItem.Qty-=1;
        }
    }
})
export const{clearCart,addItem,incrementQty,decrementQty}=CartSlice.actions;
export default CartSlice.reducer