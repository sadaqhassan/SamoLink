import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    currentUser: null,
    isLogin:false
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        LoginSuccess: (state,action)=>{
            state.isLogin = true,
            state.currentUser = action.payload
        },
        loginFailer: (state,action)=>{
            state.isLogin = false,
            state.error = action.payload
        },
        LogoutFunction: (state,action)=>{
            state.currentUser = null
            state.isLogin = false
            localStorage.removeItem('root')
        }
    }
})

export const {  LoginSuccess,loginFailer,LogoutFunction} = userSlice.actions;

export default userSlice.reducer;
