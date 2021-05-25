import React, {useState} from "react";
import { Container } from "react-bootstrap";
import TopLinks from "../../Components/TopLinks/TopLinks";
import "../../Components/Sidebar/Sidebar.scss";
import "./Activities.scss";
import ActivitieRight from "./ActivitieRight";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Search from "../../Assets/Images/search.png";

function Activities() {

  const [isActive, setActive] = useState("false");
  const handleToggle = () => { setActive(!isActive);};
  
  return (
    <>
      <TopLinks />
      <Container fluid className="activity_sec">
        <div className="activity_row">
          <div className={isActive ? "sidebar_col" : "sidebar_col open"}>
            <span className="sidebtn" onClick={handleToggle} ></span>
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
