import { Routes, Route } from "react-router";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;