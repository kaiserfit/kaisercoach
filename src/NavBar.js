import React from "react";
import logo from "./images/logo.webp"
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function NavBar() {
    const navigate = useNavigate()
    const links = [
        {name:"Programs", navTo:"/programs"},
        {name:"Food", navTo:"/food"},
        {name:"KaiserCoach", navTo:"/coaching"},
        {name:"Shop", navTo:"/shop"},
        {name:"Account", navTo:"/account"}
    ]

    const navClick = (link) => {
        navigate(link, { push: true });
    }

    const menuItems = links.map((link)=>
        <li className="nav-item" key={link.name}>
          <a className="nav-link"  href={link.navTo}>{link.name}</a>
        </li>
    )
    return (
        // <nav className="navbar navbar-light bg-light">
        // <div className="container">
        //     <a className="navbar-brand" href="#0">
        //     <img src={logo} alt="logo" width="50" height="50" />
        //     </a>
        //     <ul className="navbar-nav">
        //         {menuItems}
        //     </ul>
        // </div>
        // </nav>
        <Navbar bg="transparent" expand="lg">
        <Container>
          <Navbar.Brand href="/home"><img src={logo} alt="logo" width="50" height="50" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/programs">Programs</Nav.Link>
              <Nav.Link href="/coaching">Coaching</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}