import React, { Component } from "react";
import { Container, Row, Col, Carousel, Card } from "react-bootstrap";
import TrendingList from "./TrendingList";

export class CatalogOne extends Component {
  render() {
    return (
      <>
        <Carousel className="catalog_one">
          <Carousel.Item>
            <Row className="cat_one_row">
              <Col>
                <TrendingList />
              </Col>
              <Col>
                <TrendingList />
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="cat_one_row">
              <Col>
                <TrendingList />
              </Col>
              <Col>
                <TrendingList />
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="cat_one_row">
              <Col>
                <TrendingList />
              </Col>
              <Col>
                <TrendingList />
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}

export default CatalogOne;
