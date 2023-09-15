import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodoItems } from "../features/todo/todoSlice";
const NotesPage = () => {
  const { todoItems, isLoading } = useSelector((store) => store.todo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodoItems());
    // eslint-disable-next-line
  }, []);
  if (isLoading) {
    return (
      <>
        <div>loading</div>
      </>
    );
  }
  return (
    <>
      <div className="flex bg-slate-950 min-h-screen flex-col flex-grow items-center p-10 ">
        <div>
          <textarea
            name="notesinput"
            className="bg-slate-700 text-white"
            id=""
            cols="40"
            rows="15"
          ></textarea>
        </div>
        <div>
          <button className="bg-blue-500 flex items-center justify-center h-10 rounded-lg p-4 mx-2 my-4 text-white font-semibold">
            Add Note
          </button>
        </div>

        <div className="flex flex-wrap justify-center items-center ">
          {todoItems.map((item) => (
            <div
              key={item._id}
              className="bg-slate-800 rounded-lg h-28 mx-3 w-72 flex flex-col items-start justify-around my-6 p-7"
            >
              <div className="text-lg text-white font-bold">{item.name}</div>
              <div className="text-base text-white  italic">
                {item.tag} {item.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NotesPage;
