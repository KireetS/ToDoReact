import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingBar from "react-top-loading-bar";
import Alert from "./Alert";
import { login } from "../features/login/loginSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const [pass, setPass] = useState("");
  const [mail, setMail] = useState("");
  const { isLoading, error } = useSelector((store) => store.login);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
  const userdata = {
    email: mail,
    password: pass,
  };
  useEffect(() => {
    isLoading ? setProgress(0) : setProgress(100);
  }, [isLoading]);
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
            <Alert message="Please Enter correct credentials" />
          </div>
        </>
      )}
      <div className="max-h-screen h-screen flex items-center justify-center max-w-screen bg-slate-900">
        <div className="w-[30vw] flex flex-col items-center rounded-lg justify-center bg-slate-950 py-5">
          <div className="flex flex-grow items-center justify-center text-5xl p-4 my-4 font-bold text-gray-200">
            Log In
          </div>

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
              dispatch(login(userdata));
              if (!error) {
                if (localStorage.getItem("token")) {
                  window.location.reload();
                  navigate("/");
                }
              }
            }}
          >
            Log In
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
