import React, {useState, useEffect} from "react";
import logo from "./images/logo.webp"
import { useNavigate } from "react-router-dom";
import "./Navbar.css"
import {AiFillHome} from "react-icons/ai"
import {GiNotebook, GiHotMeal, GiTeacher} from "react-icons/gi"
import {FiShoppingCart} from "react-icons/fi"
import {FaUserCircle} from "react-icons/fa"
export default function NavBar() {
    const [activeLink, setActiveLink] = useState("Home")
    const navigate = useNavigate()
    const links = [
        {name:"Home", navTo:"/feed" , icon:<AiFillHome />},
        {name:"Programs", navTo:"/programs", icon:<GiNotebook />},
        {name:"Food", navTo:"/food", icon:<GiHotMeal />},
        {name:"KaiserCoach", navTo:"/coach", icon:<GiTeacher />},
        {name:"Shop", navTo:"/shop", icon:<FiShoppingCart />},
        {name:"Account", navTo:"/account", icon:<FaUserCircle />}
    ]

  const linkClick = (e) => {
        e.preventDefault()
        if (activeLink!==e.target.dataset.key){

            setActiveLink(e.target.dataset.key)
            navigate(e.target.dataset.nav, {push: true})
        }
    
  }

    const menuItems = links.map((link)=>
        <li className="mb-2 py-2 li-link rounded" data-key={link.name} data-nav={link.navTo} key={link.name} onClick={linkClick}>
         <span className={`${(activeLink===link.name) ? "bg-primary rounded-end" :""} me-2`}>&nbsp;</span><span className="text-primary fs-4 me-2">{link.icon}</span>  {link.name}
        </li>
    )
    return (
        <div className="w-75 pt-2 position-sticky top-0 start-0">

            <ul className=" list-unstyled">
                {menuItems}
            </ul>

        </div>
  
    )
}