import React, { useState } from "react";
import { Container } from "react-bootstrap";
import TopLinks from "../../components/TopLinks/TopLinks";
import "../../components/Sidebar/Sidebar.scss";
import "./Activities.scss";
import ActivitieRight from "./ActivitieRight";
import Sidebar from "../../components/Sidebar/Sidebar";
import SidebarCard from "../../components/Sidebar/SidebarCard";
import filtericon from "../../assets/Images/filter.svg";
import statusicon from "../../assets/Images/status.svg";
import price from "../../assets/Images/price.svg";
import chains from "../../assets/Images/chains.svg";
import sale from "../../assets/Images/sale.svg";
import CollectionIcon from "../../assets/Images/bookmark.svg";

function Activities() {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      <TopLinks />
      <Container fluid className="activity_sec">
        <div className="activity_row">
          {/* <div className={isActive ? "sidebar_col" : "sidebar_col open"}>
            <span className="sidebtn" onClick={handleToggle} ></span>
            <h3>Categories</h3> */}
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
              <h3> Event</h3>
              <ul className="status_sec">
                <li>
                  <a href="#"> Listings</a>
                </li>
                <li>
                  <a href="#" className="active">
                    Bids
                  </a>
                </li>
                <li>
                  <a href="#"> Sales</a>
                </li>
                <li>
                  <a href="#">Transfers</a>
                </li>
                <li>
                  <a href="#"> Offers</a>
                </li>
              </ul>
            </div> */}
          {/* </div> */}
          <ActivitieRight />
        </div>
      </Container>
    </>
  );
}

export default Activities;
