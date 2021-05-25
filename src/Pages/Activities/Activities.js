import React from "react";
import { Container } from "react-bootstrap";
import TopLinks from "../../Components/TopLinks/TopLinks";
import "../../Components/Sidebar/Sidebar.scss";
import "./Activities.scss";
import ActivitieRight from "./ActivitieRight";
import Sidebar from "../../Components/Sidebar/Sidebar";

function Activities() {
  return (
    <>
      <TopLinks />
      <Container fluid className="activity_sec">
        <div className="activity_row">
          <div className="sidebar_col">
            <h3>Categories</h3>
            <Sidebar />
            <div>
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
            </div>
          </div>

          <ActivitieRight />
        </div>
      </Container>
    </>
  );
}

export default Activities;
