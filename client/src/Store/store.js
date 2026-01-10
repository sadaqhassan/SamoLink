import { configureStore ,combineReducers } from "@reduxjs/toolkit";
import userReducer from './user/userSlice.js';
import storage from "redux-persist/lib/storage"
import {persistStore , persistReducer} from 'redux-persist' 

const rootReducers = combineReducers({
    userData: userReducer 
});

const persistConfig = {
    key: 'root',
    storage, 
    version:1
};


const persistedReducer = persistReducer(persistConfig,rootReducers);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (defaultConfig)=>
        defaultConfig({
            serializableCheck:false
        })
});

export const persistor = persistStore(store);

// import { configureStore,combineReducers } from '@reduxjs/toolkit';
// import storage from "redux-persist/lib/storage";

// import userReducer from './user/userSlice.js'
// import { persistStore, persistReducer } from 'redux-persist'



// const parsistConfig = {
//     key: 'root',
//     storage,
//     version:1
// }

// const rootReducers = combineReducers({
//     userData: userReducer,
// })

// const persistedReducer = persistReducer(parsistConfig ,rootReducers);


// export const store = configureStore({
//     reducer:persistedReducer,

//     // middleware
//     middleware : (getDefaultMeddle) =>
//         getDefaultMeddle({
//             serializableCheck:false
//         })
    
// });

// export const persistor = persistStore(store);