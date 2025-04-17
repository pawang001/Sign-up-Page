import React, { useState } from "react";

import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

const LoginSignup = () => {

const [action,setAction]= useState("Sign Up")

  return (
    <div className="bg-white flex flex-col m-auto mt-8 pb-8 w-2/5">
      <header className="flex flex-col items-center mt-5 gap-4 w-full">
        <div className=" text-violet-800 font-bold text-5xl">{action}</div>
        <div className="w-16 h-2 bg-violet-800 rounded-1g"></div>
      </header>
      <div className="flex flex-col mt-10 gap-6">
        {action==="Login" ? <div /> : <div className="flex items-center m-auto rounded-md h-16 bg-gray-200 w-3/4">
          <img className="mx-8 my-0" src={user_icon} />
          <input className="h-12 w-72 px-1 border-none outline-none bg-transparent text-xl text-neutral-500"
           type="text" placeholder="Name" />
        </div>}
        <div className="flex items-center m-auto rounded-md h-16 bg-gray-200 w-3/4">
          <img className="mx-8 my-0" src={email_icon} />
          <input className="h-12 w-72 px-1 border-none outline-none bg-transparent text-xl text-neutral-500"
          type="email" placeholder="Email" />
        </div>
        <div className="flex items-center m-auto rounded-md h-16 bg-gray-200 w-3/4">
          <img className="mx-8 my-0" src={password_icon} />
          <input className="h-12 w-72 px-1 border-none outline-none bg-transparent text-xl text-neutral-500"
          type="password" placeholder="Password" />
        </div>
      </div>
      {action==="Sign Up"? <div /> : <div className="mt-4 pl-16 text-lg">Forgot Password?
        <span className="text-violet-600 cursor-pointer ml-1">Click here!</span></div>}
      <div className="flex gap-8 mx-auto mt-10">
        <button className=" flex justify-center items-center w-40 h-14 font-bold text-1g
        cursor-pointer rounded-3xl bg-violet-600 text-white"
        onClick={()=> setAction("Sign Up")}>Sign Up</button>
        <button className=" flex justify-center items-center w-40 h-14 font-bold text-1g
        cursor-pointer rounded-3xl bg-gray-200 text-gray-600" 
        onClick={()=> setAction("Login")}>Login</button>
      </div>
    </div>
  );
};

export default LoginSignup;
