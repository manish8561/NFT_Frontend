import React from "react";
import { Card } from "react-bootstrap";

function ListTwo(props) {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={props.imgsrc} className="hover_img" />
        {/* <div className="hover_btn">
            <a href="#" className="dark_btn">
              Read more
            </a>
            <a href="#" className="light_btn">
              Buy Now
            </a>
          </div> */}
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Subtitle className="mb-2 "> {props.stitle}</Card.Subtitle>
          <Card.Text className="description"> {props.desc}</Card.Text>
          <Card.Text className="price"> {props.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default ListTwo;
