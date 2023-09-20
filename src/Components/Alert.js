import React from "react";

const Alert = (props) => {
  const { message } = props;
  return (
    <>
      <div className="rounded-lg flex items-center justify-center h-20 w-[80%] text-xl font-semibold bg-red-500 text-red-200 z-10">
        {message}
      </div>
    </>
  );
};

export default Alert;
