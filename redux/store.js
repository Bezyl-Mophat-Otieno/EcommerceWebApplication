import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";
import authReducer from "./adminSlice"

const store = configureStore({
    reducer:{
        cart:cartReducer,
        auth:authReducer
    }
}) 

export default store;