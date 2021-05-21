import React from "react";
import { ListGroup, FormControl, Form } from "react-bootstrap";
import ListStyle from "./ListStyle";
import listprofile from "../../Assets/Images/listprofile.png";

function CollectionSection() {
  return (
    <>
      <h3>Collections</h3>
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
    </>
  );
}

export default CollectionSection;
