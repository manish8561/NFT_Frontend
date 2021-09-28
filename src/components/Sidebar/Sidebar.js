import React from "react";
import { Accordion } from "react-bootstrap";
import "./Sidebar.scss";

function Sidebar(props) {
  return (
    <>
      <div className="sidebar_col">
        <Accordion className="profile-desc sidebar-col">
          {props.children}
        </Accordion>
      </div>
    </>
  );
}

export default Sidebar;
