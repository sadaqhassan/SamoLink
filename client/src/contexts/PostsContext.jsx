import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";


const PostsContext = createContext();

export const PostsProvider  = ({children}) => {


const [posts , setPosts] = useState([])




const postsApi = 'https://samolink-1.onrender.com/api/posts'



const fetchPosts = async () => {

try {
    toast.loading("fetching...", { id: "fetch-user" });

    const res = await fetch(`${postsApi}/get-posts`, {
    method: "GET",
    credentials: "include",
});

    if(!res){
        return setPosts(null)
    }

    const data = await res.json();

    if (!data.success) {
      toast.error(data.message, {
        id: "fetch-user",
    });
      return;
    }


    console.log(data)


    setPosts(data.data);
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
    fetchPosts()
},[])

    
    const value = {
        posts,setPosts,
        postsApi,fetchPosts
    }


    return <PostsContext.Provider value={value}>
        {children}
    </PostsContext.Provider>
}

export const usePosts =()=> useContext(PostsContext);