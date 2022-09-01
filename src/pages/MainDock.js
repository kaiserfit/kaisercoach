import React, {useState, useEffect} from "react";
import NavBar from "../NavBar";
import "../MainDock.css"
export default function MainDock(){
    const [view, setView] = useState("feed")


    return (
        <div className="container-fluid px-0 min-vh-100">
            <NavBar />
            <div className="container w-75 mx-auto bg-light border border-default border-2 rounded">
                <h1>Main Dock</h1>
            </div>
        </div>
    )
}