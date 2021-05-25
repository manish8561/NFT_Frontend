import React from "react";
import { Container, Dropdown, Form } from "react-bootstrap";
import TopLinks from "../../Components/TopLinks/TopLinks";
import CategorieRight from "./CategorieRight";
import "./Categories.scss";
import "../Home/Home.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";

function Categories() {
  return (
    <>
      <TopLinks />
      <Container fluid className="categorie_sec">
        <div className="categorie_row">
          <div className="sidebar_col">
          <h3>Collections</h3>
            <Sidebar />
            <div>
              <h3>Price Range</h3>
              <Dropdown className="custom_dropdown">
                <Dropdown.Toggle className="drop_btn">USDT</Dropdown.Toggle>
                <Dropdown.Menu className="drop_menu">
                  <Dropdown.Item href="#/action-1">ABC</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">DEF</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">GHI</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Form>
                <Form.Group controlId="formBasicRange">
                  <Form.Control type="range" />
                </Form.Group>
                <p>
                  <span>Price:</span> $10 - $200
                </p>
              </Form>
            </div>
            <div>
              <h3> Status</h3>
              <ul className="status_sec">
                <li>
                  <a href="#"> On Sale</a>
                </li>
                <li>
                  <a href="#" className="active">
                    Now
                  </a>
                </li>
                <li>
                  <a href="#"> Magna</a>
                </li>
                <li>
                  <a href="#">Has Offer</a>
                </li>
                <li>
                  <a href="#"> Dolor</a>
                </li>
                <li>
                  <a href="#"> Upcoming</a>
                </li>
              </ul>
            </div>
          </div>
          <CategorieRight />
        </div>
      </Container>
    </>
  );
}

export default Categories;
