import React from "react";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import BannerImg from "../../Assets/Images/banner_img.png";
import "./Home.scss";

function Home() {
  return (
    <div>
      <Container fluid className="top_banner">
        <Tabs defaultActiveKey="new" id="uncontrolled-tab-example">
          <Tab eventKey="new" title="New"></Tab>
          <Tab eventKey="Art" title="Art"></Tab>
          <Tab eventKey="Domain Names" title="Domain Names"></Tab>
          <Tab eventKey="Virtual Worlds" title="Virtual Worlds"></Tab>
          <Tab eventKey="Trading Cards" title="Trading Cards"></Tab>
          <Tab eventKey="Collectibles" title="Collectibles"></Tab>
          <Tab eventKey="Sports" title="Sports"></Tab>
          <Tab eventKey="Utility" title="Utility"></Tab>
        </Tabs>

        <Row className="banner_row">
          <Col>
            <img src={BannerImg} />
          </Col>
          <Col>
            <div className="banner_content">
              <h1>The largest NFT marketplace</h1>
              <p>Buy, sell, and discover rare digital items</p>
              <div className="banner_btn">
                <button className="dark_btn">Explore</button>
                <button className="light_btn">Create</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
