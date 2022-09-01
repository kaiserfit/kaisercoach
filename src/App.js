import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import MainDock from "./pages/MainDock";
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<MainDock />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
