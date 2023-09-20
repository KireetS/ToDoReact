import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../features/signup/signupSlice";
import LoadingBar from "react-top-loading-bar";
import Alert from "./Alert";
const Signup = () => {
  const { isLoading, error } = useSelector((store) => store.signup);
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [progress, setProgress] = useState(0);
  const [mail, setMail] = useState("");

  useEffect(() => {
    isLoading ? setProgress(0) : setProgress(100);
  }, [isLoading]);

  const dispatch = useDispatch();
  const userdata = { name: name, email: mail, password: pass };
  return (
    <>
      {isLoading && (
        <LoadingBar
          color="#f11946"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
      )}

      {error && (
        <>
          <div className="bg-slate-900 flex items-center justify-center">
            <Alert message="Cannot create user with this email" />
          </div>
        </>
      )}
      <div className="max-h-screen h-screen flex items-center justify-center max-w-screen bg-slate-900">
        <div className="w-[30vw] flex flex-col items-center rounded-lg justify-center bg-slate-950 py-5">
          <div className="flex flex-grow items-center justify-center text-5xl p-4 my-4 font-bold text-gray-200">
            Sign Up
          </div>
          <input
            type="text"
            className="bg-slate-700   text-gray-200 focus:outline-none active:outline-none   p-2 h-10 w-[70%] rounded-lg my-3 mx-2"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="name"
          />
          <input
            type="email"
            placeholder="email"
            className="bg-slate-700  text-gray-200  active:outline-none focus:outline-none  p-2 h-10 w-[70%] rounded-lg my-3 mx-2"
            value={mail}
            onChange={(e) => {
              setMail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="password"
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
            className="bg-slate-700  text-gray-200 focus:outline-none active:outline-none  p-2 h-10 w-[70%] rounded-lg my-3 mx-2"
          />

          <button
            className="rounded-lg bg-blue-500 p-3 font-semibold text-lg my-3 text-gray-200"
            onClick={() => {
              dispatch(signup(userdata));
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
