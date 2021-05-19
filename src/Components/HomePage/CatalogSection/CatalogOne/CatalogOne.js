import React from "react";
import { Row, Col, Carousel } from "react-bootstrap";
import TrendingList from "./TrendingList";
import PaintTextures from "../../../../Assets/Images/paint-textures.png";
import PersonRunning from "../../../../Assets/Images/person-running.png";

function CatalogOne() {
  return (
    <>
      <Carousel className="catalog_one">
        <Carousel.Item>
          <Row className="cat_one_row">
            <Col>
              <TrendingList
                name="William Leo"
                imgsrc={PaintTextures}
                heading="New Trends in Art Design"
                desc="Quisque rhoncus orci vitae nisl retrum reuturm lesuada laoreet umrna sed"
                count="150"
                category="Art Design"
              />
            </Col>
            <Col>
              <TrendingList
                name="Jack Oscar"
                imgsrc={PersonRunning}
                heading="Upcoming Sports Brands Design"
                desc="Sporting brands look after some of the most valuable intellectual"
                count="25"
                category="Sports Brands"
              />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="cat_one_row">
            <Col>
              <TrendingList
                name="William Leo"
                imgsrc={PaintTextures}
                heading="New Trends in Art Design"
                desc="Quisque rhoncus orci vitae nisl retrum reuturm lesuada laoreet umrna sed"
                count="150"
                category="Art Design"
              />
            </Col>
            <Col>
              <TrendingList
                name="Jack Oscar"
                imgsrc={PersonRunning}
                heading="Upcoming Sports Brands Design"
                desc="Sporting brands look after some of the most valuable intellectual"
                count="25"
                category="Sports Brands"
              />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="cat_one_row">
            <Col>
              <TrendingList
                name="William Leo"
                imgsrc={PaintTextures}
                heading="New Trends in Art Design"
                desc="Quisque rhoncus orci vitae nisl retrum reuturm lesuada laoreet umrna sed"
                count="150"
                category="Art Design"
              />
            </Col>
            <Col>
              <TrendingList
                name="Jack Oscar"
                imgsrc={PersonRunning}
                heading="Upcoming Sports Brands Design"
                desc="Sporting brands look after some of the most valuable intellectual"
                count="25"
                category="Sports Brands"
              />
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CatalogOne;
