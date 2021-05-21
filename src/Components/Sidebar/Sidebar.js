import React from "react";
import "./Sidebar.scss";
import {
  Container,
  Row,
  Col,
  ListGroup,
  FormControl,
  Dropdown,
} from "react-bootstrap";
import PriceSection from "./PriceSection";
import CollectionSection from "./CollectionSection";
import StatusSection from "./StatusSection";
function Sidebar() {
  return (
    <>
      <div className="sidebar_col">
        <CollectionSection />
        <PriceSection />
        <StatusSection/>
      </div>
    </>
  );
}

export default Sidebar;
