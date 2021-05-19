import React from "react";
import { Card } from "react-bootstrap";


function TopList(props) {
    return (
      <div>
        <Card>
          <Card.Img variant="top" src={props.avtar} />
          <Card.Body>
            <Card.Title>{props.title}  </Card.Title>
            <Card.Subtitle className="mb-2 ">
              {props.subtitle}
            </Card.Subtitle>
            <Card.Text className="price">$ {props.price}</Card.Text>
          </Card.Body>
        </Card>
        {/* <div className="view_all">
          <a href="#">View all</a>
        </div> */}
      </div>
    );
}

export default TopList;
