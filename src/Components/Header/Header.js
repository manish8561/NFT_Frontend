import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../../Assets/Images/logo.png";
import Search from "../../Assets/Images/search.png";
import "./Header.scss";

function Header() {
  return (
    <div className="custom_nav">
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/" className="">
              Home
            </Nav.Link>
            <Nav.Link href="/Categories">Categories</Nav.Link>
            <Nav.Link href="/Activities">Activities</Nav.Link>
            <Nav.Link href="#link">Trending</Nav.Link>
            <Nav.Link href="/MyCollection">Create</Nav.Link>
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
