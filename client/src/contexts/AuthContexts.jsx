import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const AuthContext = createContext();

export const AuthProvider  = ({children}) => {


    const [user , setUser] = useState(()=>{
    const getUser = localStorage.getItem('user');
    return getUser ? JSON.parse(getUser) : null
    });
    const [isLogedIn,setIsLogedIn] = useState(false)



    const userApi = 'https://samo-link.onrender.com/api/user'

    useEffect(()=>{
        if(user){
            localStorage.setItem('user',JSON.stringify(user))
        }else{
            localStorage.removeItem('user')
        }
    },[user]);



const fetchUser = async () => {

  try {
    toast.loading("fetching...", { id: "fetch-user" });

    const res = await fetch(`${userApi}/get-user`, {
      method: "GET",
      credentials: "include",
    });

    if(!res){
        return setUser(null)
    }

    const data = await res.json();

    if (!data.success) {
      toast.error(data.message, {
        id: "fetch-user",
      });
      setUser(null);
      return;
    }



    setUser(data.userData);
    console.log(data.userData);

    toast.success("Fetched", {
      id: "fetch-user",
    });
  } catch (error) {
    console.log(error);

    toast.error("Something went wrong", {
    id: "fetch-user",
    });
  }
};

useEffect(()=>{
    fetchUser()
},[])

    
    const value = {
        user,setUser,
        userApi,fetchUser
    }


    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}

export const useUser = ()=> useContext(AuthContext)