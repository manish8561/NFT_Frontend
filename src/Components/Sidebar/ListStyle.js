import React from "react";
import { ListGroup } from "react-bootstrap";


function ListStyle(props) {
  return (
    <>
      <ListGroup.Item>
        <img src={props.imgsrc} alt="profile" /> {props.name}
      </ListGroup.Item>
    </>
  );
}

export default ListStyle;
