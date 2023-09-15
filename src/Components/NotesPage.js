import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTodoItems,
  postTodoItems,
  deleteTodoItems,
} from "../features/todo/todoSlice";
const NotesPage = () => {
  const { todoItems, isLoading } = useSelector((store) => store.todo);
  const dispatch = useDispatch();
  const [pressed, setPressed] = useState(false);
  useEffect(() => {
    dispatch(getTodoItems());
    // eslint-disable-next-line
  }, [pressed]);
  const [name, setName] = useState("");
  const date = "12/1/23";
  const tag = "personal";
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
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            cols="40"
            rows="15"
          ></textarea>
        </div>
        <div>
          <button
            className="bg-blue-500 flex items-center justify-center h-10 rounded-lg p-4 mx-2 my-4 text-white font-semibold"
            onClick={() => {
              dispatch(postTodoItems({ name, date, tag }));
              setPressed(true);
              setTimeout(() => {
                setPressed(false);
              }, 50);
            }}
          >
            Add Note
          </button>
        </div>

        <div className="flex flex-col justify-center items-center ">
          {todoItems.map((item) => (
            <div
              key={item._id}
              className=" bg-slate-800 rounded-lg h-28 mx-3 w-[70vw]  my-6 p-2 sm:p-4 md:p-7 justify-between flex  items-center"
            >
              <div className="flex flex-col items-start justify-around">
                <div className="text-lg text-white font-bold">{item.name}</div>
                <div className="text-base text-white  italic">
                  {item.tag} {item.date}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row box-border">
                <button
                  onClick={() => {
                    dispatch(deleteTodoItems(item._id));
                    setPressed(true);
                    setTimeout(() => {
                      setPressed(false);
                    }, 50);
                  }}
                  className="bg-red-500 p-1 h-8 sm:p-2 sm:h-14 rounded-lg text-white font-semibold mx-3 my-3"
                >
                  Delete
                </button>
                <button className="bg-blue-500 p-1 h-8 sm:p-2 sm:h-14 rounded-lg text-white font-semibold mx-3 my-3">
                  Update
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NotesPage;
