import React from "react";
import "./App.scss";
import Intro from "./components/Intro";
import Sliders from "./components/Slider/Sliders";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/Sliders" element={<Sliders />} />
      </Routes>
    </Router>
  );
}

export default App;
