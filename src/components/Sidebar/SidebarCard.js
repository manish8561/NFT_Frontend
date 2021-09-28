import React, { useState } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import "./Sidebar.scss";

function SidebarCard(props) {
  const [toggle, setToggle] = useState(false);
  const triggerToggle = () => {
    setToggle(!toggle);
  };
  return (
    <Card>
      {props.mainHeading ? (
        <div className="main-title">
          <img src={props.mainIcon} />
          <span className="sidebar-heading">{props.mainHeading}</span>
        </div>
      ) : null}
      <Card.Header>
        <Accordion.Toggle
          as={Button}
          variant="link"
          eventKey={props.eventKey}
          onClick={triggerToggle}
          className={` ${toggle ? "active" : ""}`}
        >
          <img src={props.icon} />
          <span className="sidebar-heading">{props.toggleHeading}</span>
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={props.eventKey}>
        <Card.Body>
          {props.children}
          {props.content ? <p>$ 1.11</p> : null}
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}
export default SidebarCard;
