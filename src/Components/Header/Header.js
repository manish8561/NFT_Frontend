import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../../Assets/Images/logo.png";
import Search from "../../Assets/Images/search.png";
import "./Header.scss";

function Header() {
  return (
    <div className="custom_nav">
      <Navbar expand="lg">
        <Navbar.Brand href="#home">
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home" className="active">
              Home
            </Nav.Link>
            <Nav.Link href="#link">Categories</Nav.Link>
            <Nav.Link href="#link">Activities</Nav.Link>
            <Nav.Link href="#link">Trending</Nav.Link>
            <Nav.Link href="#link">Create</Nav.Link>
            <Nav.Link href="#link">About us</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
          <img src={Search} alt="search" />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
