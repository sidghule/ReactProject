import {createSlice} from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const CartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add:(state,action)=>{
            state.push(action.payload);
            toast.success("Item Add Successfully");
        },
        remove:(state,action)=>{
            return state.filter((item)=>{return item.id!==action.payload});
        }
    }
});
export const {add,remove} =CartSlice.actions;
export default CartSlice.reducer;