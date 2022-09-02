import React, {useState, useEffect} from "react";
import NavBar from "../NavBar";
import "../MainDock.css"

import {BrowserRouter} from "react-router-dom";


import TopBar from "./TopBar";
import AnimatedRoutes from "./AnimatedRoutes";
export default function MainDock(){
    const [view, setView] = useState("/feed")


    return (
        <div className="container-fluid bg-gray px-0 min-vh-100 ">
            <TopBar />
        <BrowserRouter>
            <div className="row w-100">
                <div className="col-3"><NavBar /></div>
                <div className="col-6"><AnimatedRoutes /></div>
            </div>
            
            
        </BrowserRouter>
        </div>
    )
}