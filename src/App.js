import Navbar from "./Components/Navbar";
import NotesPage from "./Components/NotesPage";
import { Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/dash" element={<NotesPage />} />
      </Routes>
    </>
  );
}

export default App;
