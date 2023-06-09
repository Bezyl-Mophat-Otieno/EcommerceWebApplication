import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    products:[],
    quantity:0,
    total:0
};
const cartSlice = createSlice({
name:"cart",
initialState,
reducers:{

    addProducts:(state,action)=>{
        state.products.push(action.payload)
        state.quantity+=1
        state.total+=action.payload.price * action.payload.quantity
    },
    reset:(state)=>{
        state = initialState
    }

}

});
export const {addProducts,reset} = cartSlice.actions
export default cartSlice.reducer