import React, { useState } from "react";
import { Navbar, Nav, Form, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import Logo from "../../assets/Images/logo.png";
import Search from "../../assets/Images/search.png";
import { PersistActions } from '../../redux/actions/persist.action';
import "./Header.scss";

function Header(props) {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };

  const persistData = useSelector((state) => state.persist);
  const dispatch = useDispatch();
  const onCreate = () => {
    const { history } = props;
    if(persistData && persistData.isLoggedIn) {
      history.push('/marketplace/collections')
    } else {
      history.push('/login');
    }
  }

  const onLogout = () => {
    const { history } = props;
    const { resetStore } = PersistActions;
    dispatch(resetStore());
    history.push('/login');
  }

  return (
    <div className="custom_nav">
      <Navbar expand="lg">
        <Navbar.Brand onClick={() => {
          const { history } = props;
          history.push('/');
        }}>
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/" className="">
              Home
            </Nav.Link>
            <Nav.Link href="/Marketplace">Marketplace</Nav.Link>
            <Nav.Link href="/Activities">Activities</Nav.Link>
            <Nav.Link href="#link">Trending</Nav.Link>
            <Nav.Link onClick={() => onCreate()}>Create</Nav.Link>    
            <Nav.Link href="#link">About us</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            {persistData && persistData.isLoggedIn && <Nav.Link onClick={() => onLogout()}>Logout</Nav.Link>}

          </Nav>
        </Navbar.Collapse>
        <img
          src={Search}
          alt="search"
          className="search"
          onClick={handleToggle}
        />
        <NavDropdown id="collasible-nav-dropdown" className="navDropdown_style">
          <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">My Collections</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">My Favorites</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">
            My Account Setting
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
        </NavDropdown>
      </Navbar>

      <div className={isActive ? "hide" : "Swap_Tab"}>
        <div className="collection-modal search-form">
          <div className="collectionForm ">
            <Form className="info-form p-0">
              <Form.Group>
                <Form.Control type="text" placeholder="Search" />
                <div className="search-icon">
                  <i className="fa fa-search"></i>
                </div>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Header);
