import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { login } = useSelector((store) => store.login);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { profileImage } = useSelector((store) => store.update);
  const signout = () => {
    localStorage.removeItem("token");
  };
  useEffect(() => {
    console.log("navre");
  }, [login]);
  return (
    <>
      <nav>
        <div className="bg-slate-900 h-14 flex justify-between items-center flex-grow">
          <div className="text-white font-bold text-3xl p-2 mx-2">ToDoList</div>

          {login && (
            <div className="flex relative items-center justify-center">
              <div>
                <button
                  onClick={() => {
                    setIsNavOpen(!isNavOpen);
                  }}
                >
                  <img
                    src={`http://localhost:4000/images/${profileImage}`}
                    alt="pfp"
                    className="h-12 w-12 rounded-full p-2 mx-2"
                  />
                </button>
              </div>
              <div
                className={`${
                  isNavOpen ? "block" : "hidden"
                } absolute top-[3.75rem] left-[-4.5rem]  bg-slate-700 w-32  rounded-lg`}
              >
                <ul className="flex flex-col flex-grow">
                  <li className="p-2 text-white font-semibold border-b-2 border-b-gray-500">
                    <Link to="/upload">Upload Image</Link>
                  </li>
                  <li className="p-2 text-white font-semibold border-b-2 border-b-gray-500">
                    <Link to="/">Notes Page</Link>
                  </li>
                  <li className="p-2 text-white font-semibold">
                    <button
                      onClick={() => {
                        signout();
                        window.location.reload();
                      }}
                    >
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {!login && (
            <>
              <div className="flex items-center justify-center">
                <button className="bg-blue-500 flex items-center justify-center h-10 rounded-lg p-4 mx-2 text-white font-semibold">
                  <Link to="/login">Login</Link>
                </button>
                <button className=" text-white font-semibold bg-blue-500 flex items-center justify-center h-10 rounded-lg p-4 mx-2">
                  <Link to="/signup">SignUp</Link>
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
