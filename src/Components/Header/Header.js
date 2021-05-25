import React, {useState } from 'react'
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../../Assets/Images/logo.png";
import Search from "../../Assets/Images/search.png";
import "./Header.scss";

function Header() {

  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
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
        </Navbar.Collapse>
      </Navbar>
      <img src={Search} alt="search" className="search" onClick={handleToggle} />
      <div  className={isActive ? "hide" : "Swap_Tab"}>

        asdfasdf adfadfadfasf
      </div>
    </div>
  );
}

export default Header;
