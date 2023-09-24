import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../features/update/updateSlice";

const UploadImage = () => {
  const dispatch = useDispatch();
  const { profileImage } = useSelector((store) => store.update);
  const [image, setImage] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setImage(selectedFile);
  };

  const handleUpload = () => {
    if (image) {
      const formData = new FormData();
      formData.append("profileImage", image);
      dispatch(update(formData));
    }
  };
  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen bg-slate-800">
        <div className="rounded-lg w-[50%] h-[30%] bg-slate-900 flex items-center box-border p-4">
          <div>
            <img
              src={`http://localhost:4000/images/${profileImage}`}
              alt="pfp"
              className="w-30 h-30 rounded-full"
            />
          </div>
          <div className="mx-4 ">
            <input
              type="file"
              name=""
              id=""
              onChange={handleFileChange}
              className="my-2 rounded-lg bg-green-400 p-3"
            />
            <button
              className="mx-2 bg-blue-500 rounded-lg p-3 my-2"
              onClick={handleUpload}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadImage;
