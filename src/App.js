import Navbar from "./Components/Navbar";
import NotesPage from "./Components/NotesPage";
import { Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import UploadImage from "./Components/UploadImage";

function App() {
  const { login } = useSelector((store) => store.login);
  useEffect(() => {
    console.log("refresh");
  }, [login]);
  return (
    <>
      <Navbar />

      <Routes>
        {!login && <Route path="/signup" element={<Signup />} />}
        {!login && <Route path="/login" element={<Login />} />}
        {login && <Route path="/" element={<NotesPage />} />}
        {login && <Route path="/upload" element={<UploadImage />} />}
      </Routes>
    </>
  );
}

export default App;
