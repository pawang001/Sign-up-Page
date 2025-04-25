import React, { useState } from "react";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmission = () => {
    if (action === "Sign Up") {
      console.log("Sign Up Data:", { name, email, password });
      // Add your sign-up logic here (e.g., API call)
    } else {
      console.log("Login Data:", { email, password });
      // Add your login logic here (e.g., API call)
    }
  };

  return (
    <div className="bg-white flex flex-col m-auto mt-8 pb-8 w-2/5">
      <header className="flex flex-col items-center mt-5 gap-4 w-full">
        <div className=" text-violet-800 font-bold text-5xl">{action}</div>
        <div className="w-16 h-2 bg-violet-800 rounded-1g"></div>
      </header>
      <div className="flex flex-col mt-10 gap-6">
        {action === "Login" ? null : (
          <div className="flex items-center m-auto rounded-md h-16 bg-gray-200 w-3/4">
            <img className="mx-8 my-0" src={user_icon} alt="User Icon" />
            <input
              className="h-12 w-72 px-1 border-none outline-none bg-transparent text-xl text-neutral-500"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}
        <div className="flex items-center m-auto rounded-md h-16 bg-gray-200 w-3/4">
          <img className="mx-8 my-0" src={email_icon} alt="Email Icon" />
          <input
            className="h-12 w-72 px-1 border-none outline-none bg-transparent text-xl text-neutral-500"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex items-center m-auto rounded-md h-16 bg-gray-200 w-3/4">
          <img className="mx-8 my-0" src={password_icon} alt="Password Icon" />
          <input
            className="h-12 w-72 px-1 border-none outline-none bg-transparent text-xl text-neutral-500"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      {action === "Login" && (
        <div className="mt-4 pl-16 text-lg">
          Forgot Password?
          <span className="text-violet-600 cursor-pointer ml-1">Click here!</span>
        </div>
      )}
      <div className="flex gap-8 mx-auto mt-10">
        {action === "Sign Up" ? (
          <button
            className="flex justify-center items-center w-40 h-14 font-bold text-1g cursor-pointer rounded-3xl bg-violet-600 text-white"
            onClick={handleSubmission}
          >
            Sign Up
          </button>
        ) : (
          <button
            className="flex justify-center items-center w-40 h-14 font-bold text-1g cursor-pointer rounded-3xl bg-violet-600 text-white"
            onClick={handleSubmission}
          >
            Login
          </button>
        )}
        <button
          className="flex justify-center items-center w-40 h-14 font-bold text-1g cursor-pointer rounded-3xl bg-gray-200 text-gray-600"
          onClick={() => setAction(action === "Sign Up" ? "Login" : "Sign Up")}
        >
          {action === "Sign Up" ? "Login" : "Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default LoginSignup;