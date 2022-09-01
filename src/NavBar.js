import React from "react";
import logo from "./images/logo.webp"
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function NavBar() {
    
    const links = [
        {name:"Programs", navTo:"/programs"},
        {name:"Food", navTo:"/food"},
        {name:"KaiserCoach", navTo:"/coaching"},
        {name:"Shop", navTo:"/shop"},
        {name:"Account", navTo:"/account"}
    ]

  

    const menuItems = links.map((link)=>
        <li key={link.name}>
          <a href={link.navTo}>{link.name}</a>
        </li>
    )
    return (
   
            <ul>
                {menuItems}
            </ul>

  
    )
}