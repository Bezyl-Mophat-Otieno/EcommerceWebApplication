import {createSlice} from '@reduxjs/toolkit'
const authSlice = createSlice({
name:"auth",
initialState:{
    admin:false  
},

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