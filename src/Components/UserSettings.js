import React from "react";

const UserSettings = () => {
  return (
    <>
      <div className="w- full flex">
        <div className="h-[95vh] w-[30%] bg-slate-700 flex flex-col items-center ">
          <div className="relative h-48 w-48 rounded-full my-5 mx-2 box-border">
            <img
              src="https://qph.cf2.quoracdn.net/main-qimg-6d72b77c81c9841bd98fc806d702e859-lq"
              alt="pfp"
              className="h-48 w-48 rounded-full p-1  hover:opacity-50 "
            />

            <button className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 rounded-full hover:opacity-50 hover:bg-gray-800 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-12 h-12 text-white hover:text-gray-200 transition duration-30"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>
          </div>
          <div className="my-5 mx-2 text-white text-4xl font-bold">Name</div>
          <div className="my-1 mx-2 text-gray-400 text-xl font-semibold italic">
            {" "}
            email@email.com{" "}
          </div>
        </div>
        <div className="h-[95vh] w-[70%] bg-slate-800 flex items-center justify-center">
          <div className="h-[60%] w-[60%] bg-slate-900 rounded-lg  flex flex-col items-center justify-center ">
            <div className="my-2 mx-2 text-white text-4xl font-bold">
              Update User Details
            </div>
            <div className="flex flex-col w-[70%] items-center">
              <div className="mt-5 mx-2 text-white text-xl font-semibold">
                Update Name
              </div>
              <input
                type="text"
                className="bg-slate-700   text-gray-200 focus:outline-none active:outline-none w-[100%]  p-2 h-10 rounded-lg  mx-2"
              />
            </div>

            <div className="flex flex-col w-[70%] items-center">
              <div className="mt-5 mx-2 text-white text-xl font-semibold">
                Update Email
              </div>
              <input
                type="text"
                className="bg-slate-700   text-gray-200 focus:outline-none active:outline-none w-[100%]  p-2 h-10 rounded-lg  mx-2"
              />
            </div>

            <div className="flex items-center justify-center my-10">
              <button className="font-semibold bg-green-400 rounded-lg py-2 px-4 flex items-center justify-center">
                {" "}
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSettings;
