import React, { useState } from 'react'
import { Navbar, Nav, Form } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import Logo from "../../assets/Images/logo.png";
import Search from "../../assets/Images/search.png";
import { PersistActions } from '../../redux/actions/persist.action';
import "./Header.scss";

function Header(props) {

  const [isActive, setActive] = useState("false");
  const handleToggle = () => { setActive(!isActive); };

  const persistData = useSelector((state) => state.persist);
  const dispatch = useDispatch();
  const onCreate = () => {
    const { history } = props;
    if(persistData && persistData.isLoggedIn) {
      history.push('/marketplace/my-collection')
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
            <Nav.Link href="/categories">Categories</Nav.Link>
            <Nav.Link href="/activities">Activities</Nav.Link>
            <Nav.Link href="#link">Trending</Nav.Link>
            <Nav.Link onClick={() => onCreate()}>Create</Nav.Link>    
            <Nav.Link href="#link">About us</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            {persistData && persistData.isLoggedIn && <Nav.Link onClick={() => onLogout()}>Logout</Nav.Link>}

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

export default withRouter(Header);
