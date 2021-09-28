import React, { useState } from "react";
import { Modal, Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import EthIcon from "../../assets/Images/eth.svg";
import close from "../../assets/Images/clear_black.svg";
import ArtImg from "../../assets/Images/img_1.png";
import VerifiedUser from "../../assets/Images/verified-user.svg";

function CheckoutPopup(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button onClick={handleShow} className={`buyNow_btn ${props.className}`}>
        {props.buttontxt}
      </button>
      <Modal
        centered
        size="xl"
        show={show}
        onHide={handleClose}
        className="checkoutModal_Style"
      >
        <Modal.Title className="text-center w-100">
          Complete checkout
          <a href="#" className="close-btn" onClick={handleClose}>
            <img src={close} />
          </a>
        </Modal.Title>

        <Modal.Body>
          <Container>
            <Row>
              <Col xs={6} md={6} className="boldText">
                Item
              </Col>
              <Col xs={6} md={6} className="text-right boldText">
                Subtotal
              </Col>
            </Row>
            <hr />
            <Row className="d-flex align-items-center">
              <Col xs={6} md={6} className="selectedArt">
                <img src={ArtImg} alt="art img" />
                <h5>
                  <small>
                    William Leo <img src={VerifiedUser} alt="verified tick" />
                  </small>
                  <br />
                  ART WORLD
                </h5>
              </Col>
              <Col xs={6} md={6} className="text-right amountText">
                <img src={EthIcon} alt="coin icon" /> 100 <small>($0.00)</small>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col xs={6} md={6} className="boldText">
                Total
              </Col>
              <Col xs={6} md={6} className="text-right amountText">
                <img src={EthIcon} alt="coin icon" /> 100 <small>($0.00)</small>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col xs={12} md={12} className="termsText">
                <Form.Check type="checkbox" name="checkbox">
                  <Form.Check.Input type="checkbox" name="checkbox" />
                  <Form.Check.Label>
                    By checking this box, I agree to NFT Poc
                  </Form.Check.Label>
                  <Link to="#">Terms of Service</Link>
                </Form.Check>
              </Col>
            </Row>
            <hr />
          </Container>
        </Modal.Body>
        <Modal.Footer className="justify-content-center border-0 py-0">
          <button onClick={handleClose} className="light_btn checkoutBtn">
            CHECKOUT
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CheckoutPopup;
