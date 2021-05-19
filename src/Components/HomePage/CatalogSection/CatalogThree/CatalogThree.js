import React, { Component } from "react";
import { Container, Row, Col, Carousel, Card } from "react-bootstrap";
import TopList from './TopList'

export class CatalogThree extends Component {
  render() {
    return (
      <>
        <Row className="catalog_three">
          <Col>
            <h2>Hot Sale</h2>
            <TopList />
            <TopList />
            <TopList />
            <TopList />
            <div className="view_all">
              <a href="#">View all</a>
            </div>
          </Col>
          <Col>
            <h2>Top Rated</h2>
            <TopList />
            <TopList />
            <TopList />
            <TopList />
            <div className="view_all">
              <a href="#">View all</a>
            </div>
          </Col>
          <Col>
            <h2>Popular</h2>
            <TopList />
            <TopList />
            <TopList />
            <TopList />
            <div className="view_all">
              <a href="#">View all</a>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

export default CatalogThree;
