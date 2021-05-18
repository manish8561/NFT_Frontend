import React from "react";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import BannerImg from "../../Assets/Images/banner_img.png";
import "./Home.scss";

function Home() {
  return (
    <div>
      <Container fluid className="top_list">
        <Container>
          <ul>
            <li>
              <a href="#">New</a>
            </li>
            <li>
              <a href="#">Art</a>
            </li>
            <li>
              <a href="#">Domain Names</a>
            </li>
            <li>
              <a href="#">Virtual Worlds</a>
            </li>
            <li>
              <a href="#">Trading Cards</a>
            </li>
            <li>
              <a href="#">Collectibles</a>
            </li>
            <li>
              <a href="#">Sports</a>
            </li>
            <li>
              <a href="#">Utility</a>
            </li>
          </ul>
        </Container>
      </Container>
      <Container fluid className="top_banner">
        <Container className="ContMain">
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
      </Container>
    </div>
  );
}

export default Home;
