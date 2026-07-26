import { Routes, Route } from "react-router-dom";

import Home from "./pages/home.jsx";
import Interview from "./pages/interview.jsx";
import Result from "./pages/result.jsx";

import "./styles/app.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/interview" element={<Interview />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;