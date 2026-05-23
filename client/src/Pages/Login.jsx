import { useState } from "react";
import { useUser } from "../contexts/AuthContexts";
import toast from "react-hot-toast";

const Login = () => {


    const [state, setState] = useState("login");
    const [inputData,setInputData] = useState({})
    const {user,setUser,fetchUser,userApi,fetchPosts} = useUser();

    const handleIputs = (e)=>{
        const {name,value} = e.target
        setInputData((prev)=>({
            ...prev,
            [name]:value
        }));
    };

    //submit
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(state === "login"){
            const res = await fetch(`${userApi}/login`,{
                method:"POST",
                headers:{"content-type":"application/json"},
                credentials :"include",
                body:JSON.stringify(inputData)
            });
            const data = await res.json();

            if(!data.success) return toast.error(data.message);
            fetchUser();
           window.location.reload()
        }else{
            const res = await fetch(`${userApi}/register`,{
                method:"POST",
                headers:{"content-type":"application/json"},
                body:JSON.stringify(inputData)
            });
            const data = await res.json();
            if(!data.success) return toast.error(data.message);
            toast.success(data.message)
            setState("login")
            console.log(user);
    }
    }

    return (
        <form onSubmit={handleSubmit} className="flex mt-20 flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] text-gray-500 rounded-lg shadow-xl border border-gray-200 bg-white">
            <p className="text-2xl font-medium m-auto">
                <span className="text-dark">User</span> {state === "login" ? "Login" : "Sign Up"}
            </p>
            {state === "register" && (
                <div className="w-full">
                    <p>Name</p>
                    <input onChange={handleIputs} value={inputData?.name} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" type="text" name="name" required />
                </div>
            )}
            <div className="w-full ">
                <p>Email</p>
                <input onChange={handleIputs} value={inputData?.email} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" type="email"  name="email" required />
            </div>
            <div className="w-full ">
                <p>Password</p>
                <input onChange={handleIputs} value={inputData?.password} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" type="password" name="password" required />
            </div>
            {state === "register" ? (
                <p>
                    Already have account? <span onClick={() => setState("login")} className="text-dark cursor-pointer">click here</span>
                </p>
            ) : (
                <p>
                    Create an account? <span onClick={() => setState("register")} className="text-dark cursor-pointer">click here</span>
                </p>
            )}
            <button className="bg-light hover:bg-light/50 transition-all text-dark w-full py-2 rounded-md cursor-pointer">
                {state === "register" ? "Create Account" : "Login"}
            </button>
        </form>
    );
};

export default Login;