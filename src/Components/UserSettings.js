import React from "react";

const UserSettings = () => {
  return (
    <>
      <div className="w- full flex">
        <div className="h-[95vh] w-[30%] bg-slate-700 flex flex-col items-center ">
          <div>
            <img
              src="https://qph.cf2.quoracdn.net/main-qimg-6d72b77c81c9841bd98fc806d702e859-lq"
              alt="pfp"
              className="h-48 w-48 rounded-full p-2 mx-2 my-5"
            />
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
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSettings;
