import React from "react";

const NotesPage = () => {
  return (
    <>
      <div className="flex bg-slate-950 min-h-screen flex-col flex-grow items-center p-10 ">
        <div>
          <textarea
            name="notesinput"
            className="bg-slate-700 text-white"
            id=""
            cols="70"
            rows="15"
          ></textarea>
        </div>
        <div>
          <button className="bg-blue-500 flex items-center justify-center h-10 rounded-lg p-4 mx-2 my-4 text-white font-semibold">
            Add Note
          </button>
        </div>
      </div>
    </>
  );
};

export default NotesPage;
