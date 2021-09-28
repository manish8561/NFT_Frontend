import React from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import Collection from "../../components/Collection/Collection";
import Nftleft from "../../components/Nftleft/Nftleft";
import Nftright from "../../components/Nftright/Nftright";
import Tradinghistory from "../../components/Tradinghistory/Tradinghistory";
import "../Creatednft/Creatednft.scss";

function ViewDetails() {
  return (
    <>
      <Container fluid className="viewDetail_Cont">
        <Container className="create-nft-col ">
          <Row>
            <Col md={5}>
              <Nftleft />
            </Col>
            <Col md={7}>
              <Nftright />
            </Col>
            <Col md={12}>
              <Tradinghistory />
            </Col>
            <Col md={12}>
              <Collection />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} lg={12} className="text-center">
              <button className="light_btn viewMore_Btn">View More Collection</button>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default ViewDetails;
