import React from "react";
import { useSelector } from "react-redux";
const Signup = () => {
  const { isDone } = useSelector((store) => store.signup);
  if (isDone) {
    alert("sign up successful");
  }
  return (
    <>
      <div className="max-h-screen h-screen flex items-center justify-center max-w-screen bg-slate-900">
        <div className="w-[30vw] flex flex-col items-center rounded-lg justify-center bg-slate-950 py-5">
          <div className="flex flex-grow items-center justify-center text-5xl p-4 my-4 font-bold text-gray-200">
            Sign Up
          </div>
          <input
            type="text"
            className="bg-slate-700   text-gray-200 focus:outline-none active:outline-none   p-2 h-10 w-[70%] rounded-lg my-3 mx-2"
            placeholder="name"
          />
          <input
            type="email"
            placeholder="email"
            className="bg-slate-700  text-gray-200  active:outline-none focus:outline-none  p-2 h-10 w-[70%] rounded-lg my-3 mx-2"
          />
          <input
            type="password"
            placeholder="password"
            className="bg-slate-700  text-gray-200 focus:outline-none active:outline-none  p-2 h-10 w-[70%] rounded-lg my-3 mx-2"
          />

          <button className="rounded-lg bg-blue-500 p-3 font-semibold text-lg my-3 text-gray-200">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
