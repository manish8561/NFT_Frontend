import React, { Component } from "react";
import { Container, Row, Col, Carousel, Card } from "react-bootstrap";
import ListTwo from "./ListTwo";

export class CatalogTwo extends Component {
  render() {
    return (
      <>
        <Row className="catalog_two">
          <Col xs={12} className="top_col">
            <h2>ART</h2>
            <ul>
              <li>
                <a href="#" className="active">
                  All
                </a>
              </li>
              <li>
                <a href="#">New</a>
              </li>
              <li>
                <a href="#">Trending</a>
              </li>
              <li>
                <a href="#">Art</a>
              </li>
            </ul>
          </Col>
          <ListTwo />
          <ListTwo />
          <ListTwo />
          <ListTwo />
        </Row>
      </>
    );
  }
}

export default CatalogTwo;
