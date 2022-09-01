import React, {useState, useEffect} from "react";
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";

import Login from "./pages/Login";
import MainDock from "./pages/MainDock";
import {useTransition, animated} from "react-spring"

function App() {
  const [path, setPath] = useState(window.location.pathname)

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
