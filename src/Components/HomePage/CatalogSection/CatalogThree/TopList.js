import React, { Component } from "react";
import { Container, Row, Col, Carousel, Card } from "react-bootstrap";
import Img_3 from "../../../../Assets/Images/img_3.png";

export class TopList extends Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Img variant="top" src={Img_3} />
          <Card.Body>
            <Card.Title>Jacks Oscar </Card.Title>
            <Card.Subtitle className="mb-2 ">
              Lesuada laoreet umrna sed
            </Card.Subtitle>
            <Card.Text className="price">$ 69.59</Card.Text>
          </Card.Body>
        </Card>
        {/* <div className="view_all">
          <a href="#">View all</a>
        </div> */}
      </div>
    );
  }
}

export default TopList;
