import React, { useState } from "react";
import { Container, Dropdown, Form } from "react-bootstrap";
import TopLinks from "../../components/TopLinks/TopLinks";
import CategorieRight from "./CategorieRight";
import "./Marketplace.scss";
import "../Home/Home.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import SidebarCard from "../../components/Sidebar/SidebarCard";
import filtericon from "../../assets/Images/filter.svg";
import statusicon from "../../assets/Images/status.svg";
import price from "../../assets/Images/price.svg";
import chains from "../../assets/Images/chains.svg";
import sale from "../../assets/Images/sale.svg";
import CollectionIcon from "../../assets/Images/bookmark.svg";

function Marketplace() {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      {/* <TopLinks /> */}
      <Container fluid className="categorie_sec">
        <div className="categorie_row">
          {/* <div className={isActive ? "sidebar_col" : "sidebar_col open"}> */}
          {/* <span className="sidebtn" onClick={handleToggle}></span>
            <h3>Collections</h3> */}
          <Sidebar>
            <SidebarCard
              mainHeading="Filter"
              mainIcon={filtericon}
              icon={statusicon}
              toggleHeading="Status"
              eventKey="0"
            >
              <div className="status_sec">
                <a href="#"> Buy Now</a>
                <a href="#" className="active">
                  On Auction
                </a>
                <a href="#"> New</a>
                <a href="#">Has Offer</a>
              </div>
            </SidebarCard>
            <SidebarCard
              icon={price}
              toggleHeading="Price"
              eventKey="1"
              content
            />
            <SidebarCard
              icon={CollectionIcon}
              toggleHeading="Collections"
              eventKey="2"
              content
            />
            <SidebarCard
              icon={chains}
              toggleHeading="Chains"
              eventKey="3"
              content
            />
            <SidebarCard
              icon={price}
              toggleHeading="Categories"
              eventKey="5"
              content
            />
            <SidebarCard
              icon={sale}
              toggleHeading="On Sale In"
              eventKey="6"
              content
            />
          </Sidebar>
          {/* <div>
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
            </div> */}
          {/* </div> */}
          <CategorieRight />
        </div>
      </Container>
    </>
  );
}

export default Marketplace;
