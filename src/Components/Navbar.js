import React, { useState } from "react";

const Navbar = () => {
  const [login] = useState(false);
  return (
    <>
      <nav>
        <div className="bg-slate-900 h-14 flex justify-between items-center flex-grow">
          <div className="text-white font-bold text-3xl p-2 mx-2">ToDoList</div>

          {login && (
            <div>
              <img
                src="https://qph.cf2.quoracdn.net/main-qimg-6d72b77c81c9841bd98fc806d702e859-lq"
                alt="pfp"
                className="h-12 w-12 rounded-full p-2 mx-2"
              />
            </div>
          )}
          {!login && (
            <>
              <div className="flex items-center justify-center">
                <button className="bg-blue-500 flex items-center justify-center h-10 rounded-lg p-4 mx-2 text-white font-semibold">
                  Login
                </button>
                <button className=" text-white font-semibold bg-blue-500 flex items-center justify-center h-10 rounded-lg p-4 mx-2">
                  SignUp
                </button>
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
