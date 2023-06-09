import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    admin: false,
  };


const authSlice = createSlice({
name:"auth",
initialState,
reducers:{

    adminLogIn:(state)=>{
        state.admin = true
    },
    adminLogOut:(state)=>{
        state = state.admin = false
    }

}

});
export const {adminLogIn,adminLogOut} = authSlice.actions
export default authSlice.reducer