import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider  = ({children}) => {


    const [user , setUser] = useState(()=>{
    const getUser = localStorage.getItem('user');
    return getUser ? JSON.parse(getUser) : null
    });

    const userApi = 'http://localhost:4000/api/user'

    useEffect(()=>{
        if(user){
            localStorage.setItem('user',JSON.stringify(user))
        }else{
            localStorage.removeItem('user')
        }
    },[user]);
    
    const value = {
        user,setUser,
        userApi
    }


    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}

export const useUser = ()=> useContext(AuthContext)