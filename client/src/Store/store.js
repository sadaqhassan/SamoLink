import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice.js'
import {parsist}



const parsisteConfig = {

}

export const store = configureStore({
    reducer:{
        userData: userReducer,
    }
})
