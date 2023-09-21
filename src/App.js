import Navbar from "./Components/Navbar";
import NotesPage from "./Components/NotesPage";
import { Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { useSelector } from "react-redux";

function App() {
  const { login } = useSelector((store) => store.login);
  return (
    <>
      <Navbar />

      <Routes>
        {!login && <Route path="/signup" element={<Signup />} />}
        {!login && <Route path="/login" element={<Login />} />}
        {login && <Route path="/" element={<NotesPage />} />}
      </Routes>
    </>
  );
}

export default App;
