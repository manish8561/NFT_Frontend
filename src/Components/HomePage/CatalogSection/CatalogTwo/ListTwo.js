import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Img_1 from '../../../../Assets/Images/img_1.png'

export class ListTwo extends Component {
  render() {
    return (
      <>
        <Card>
          <Card.Img variant="top" src={Img_1} />
          <Card.Body>
            <Card.Title>William Leo </Card.Title>
            <Card.Subtitle className="mb-2 ">Art World</Card.Subtitle>
            <Card.Text className="description">
              Quisque rhoncus orci vitae nisl retrum reuturm lesuada laoreet
              umrna sed
            </Card.Text>
            <Card.Text className="price">$ 155.99</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default ListTwo;
