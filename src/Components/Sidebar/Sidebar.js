import React from "react";
import { Form, ListGroup, FormControl } from "react-bootstrap";
import ListStyle from "./ListStyle";
import listprofile from "../../Assets/Images/listprofile.png";
import "./Sidebar.scss";

function Sidebar() {
  return (
    <>
      <div>
          <Form.Group>
            <FormControl
              placeholder="Sports"
              aria-label="Sports"
              className="custom_input"
            />
            <span className="search_icon"></span>
            <span className="cross_icon"></span>
          </Form.Group>
          <ListGroup className="custom_list">
            <ListStyle imgsrc={listprofile} name="Lorem Ipsum Dolor" />
            <ListStyle imgsrc={listprofile} name="Consectetur Adipiscing" />
            <ListStyle imgsrc={listprofile} name="Morbi Vehicula" />
            <ListStyle imgsrc={listprofile} name="Metus Vitae" />
            <ListStyle imgsrc={listprofile} name="Fermentum Mattis" />
            <ListStyle imgsrc={listprofile} name="Quisque do Liberor" />
            <ListStyle imgsrc={listprofile} name="Magna Luctus" />
            <ListStyle imgsrc={listprofile} name="Lorem Ipsum Dolor" />
            <ListStyle imgsrc={listprofile} name="Metus Vitae" />
            <ListStyle imgsrc={listprofile} name="Morbi Vehicula" />
          </ListGroup>
      </div>
    </>
  );
}

export default Sidebar;
