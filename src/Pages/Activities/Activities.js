import React from "react";
import { Container } from "react-bootstrap";
import TopLinks from "../../Components/TopLinks/TopLinks";
import "../../Components/Sidebar/Sidebar.scss";
import "./Activities.scss";
import ActivitieRight from "./ActivitiesRight/ActivitieRight";
import ActivitieSidebar from "./ActivitieSidebar";

function Activities() {
  return (
    <>
      <TopLinks />
      <Container fluid className="activity_sec">
        <div className="activity_row">
          <ActivitieSidebar />
          <ActivitieRight />
        </div>
      </Container>
    </>
  );
}

export default Activities;
