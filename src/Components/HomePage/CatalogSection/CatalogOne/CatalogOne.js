import React from "react";
import { Row, Col, Carousel } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import TrendingList from "./TrendingList";
import PaintTextures from "../../../../Assets/Images/paint-textures.png";
import PersonRunning from "../../../../Assets/Images/person-running.png";

const options = {
  margin: 10,
  responsiveClass: true,
  autoplay: true,
  loop: true,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
};
function CatalogOne() {
  return (
    <>
      <OwlCarousel className="owl-theme catalog_one" {...options}>
        <div className="cat_one_row">
          <TrendingList
            name="William Leo"
            imgsrc={PaintTextures}
            heading="New Trends in Art Design"
            desc="Quisque rhoncus orci vitae nisl retrum reuturm lesuada laoreet umrna sed"
            count="150"
            category="Art Design"
          />
        </div>
        <div className="cat_one_row">
          <TrendingList
            name="Jack Oscar"
            imgsrc={PersonRunning}
            heading="Upcoming Sports Brands Design"
            desc="Sporting brands look after some of the most valuable intellectual"
            count="25"
            category="Sports Brands"
          />
        </div>
        <div className="cat_one_row">
          <TrendingList
            name="William Leo"
            imgsrc={PaintTextures}
            heading="New Trends in Art Design"
            desc="Quisque rhoncus orci vitae nisl retrum reuturm lesuada laoreet umrna sed"
            count="150"
            category="Art Design"
          />
        </div>
        <div className="cat_one_row">
          <TrendingList
            name="Jack Oscar"
            imgsrc={PersonRunning}
            heading="Upcoming Sports Brands Design"
            desc="Sporting brands look after some of the most valuable intellectual"
            count="25"
            category="Sports Brands"
          />
        </div>
        <div className="cat_one_row">
          <TrendingList
            name="William Leo"
            imgsrc={PaintTextures}
            heading="New Trends in Art Design"
            desc="Quisque rhoncus orci vitae nisl retrum reuturm lesuada laoreet umrna sed"
            count="150"
            category="Art Design"
          />
        </div>
        <div className="cat_one_row">
          <TrendingList
            name="Jack Oscar"
            imgsrc={PersonRunning}
            heading="Upcoming Sports Brands Design"
            desc="Sporting brands look after some of the most valuable intellectual"
            count="25"
            category="Sports Brands"
          />
        </div>
      </OwlCarousel>
      {/* <Carousel className="catalog_one">
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
      </Carousel> */}
    </>
  );
}

export default CatalogOne;
