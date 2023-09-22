import React from "react";

const UserSettings = () => {
  return (
    <>
      <div className="w- full flex">
        <div className="h-[95vh] w-[30%] bg-slate-700 flex flex-col items-center justify-center">
          <div>
            <img
              src="https://qph.cf2.quoracdn.net/main-qimg-6d72b77c81c9841bd98fc806d702e859-lq"
              alt="pfp"
              className="h-12 w-12 rounded-full p-2 mx-2"
            />
          </div>
        </div>
        <div className="h-[95vh] w-[70%] bg-slate-800"></div>
      </div>
    </>
  );
};

export default UserSettings;
