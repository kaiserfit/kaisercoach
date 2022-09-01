import React from "react";
import NavBar from "../NavBar";
import "../MainDock.css"
export default function MainDock(){
    return (
        <div className="container-fluid bg-gray px-0 min-vh-100">
            <NavBar />
            <div className="container w-75 mx-auto bg-light border border-default border-2 rounded">
                <h1>Main Dock</h1>
            </div>
        </div>
    )
}