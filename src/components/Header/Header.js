import React, { useState } from 'react'
import { Navbar, Nav, Form } from "react-bootstrap";
import Logo from "../../assets/Images/logo.png";
import Search from "../../assets/Images/search.png";
import "./Header.scss";

function Header() {

  const [isActive, setActive] = useState("false");
  const handleToggle = () => { setActive(!isActive); };

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
      <div className={isActive ? "hide" : "Swap_Tab"}>
        <div className="collection-modal search-form">
          <div className="collectionForm ">
            <Form className="info-form p-0">
              <Form.Group>

                <Form.Control type="text" placeholder="Search" />

                <div className="search-icon"><i className="fa fa-search"></i></div>
              </Form.Group>



            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
