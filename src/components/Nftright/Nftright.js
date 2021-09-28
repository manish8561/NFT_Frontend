import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import refresh from "../../assets/Images/refresh.svg";
import gift from "../../assets/Images/Icon-gift.svg";
import share from "../../assets/Images/Icon metro-share.svg";
import dots from "../../assets/Images/dots.svg";
import eyeicon from "../../assets/Images/eye.svg";
import listing from "../../assets/Images/listing.svg";
import price from "../../assets/Images/graph.svg";
import offers from "../../assets/Images/offer.svg";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import trading from "../../assets/Images/chartdata.svg";
import emptyoffer from "../../assets/Images/empty-bids.svg";
import Form from "react-bootstrap/Form";
import CheckoutPopup from "../../components/Popup/CheckoutPopup";
import EthIcon from "../../assets/Images/eth.svg";
import HeartIcon from '../../assets/Images/heart.svg'
import "./Nftright.scss";
function Nftright() {
  return (
    <React.Fragment>
      <div className="top_head">
        <div>
          <h2>My NFT</h2>
          <p>Untitled Collection #2728089</p>
        </div>
        <ButtonGroup aria-label="Basic example">
          <Button variant="outline-primary">
            <img src={refresh} />
          </Button>
          <Button variant="outline-primary">
            <img src={gift} />
          </Button>
          <Button variant="outline-primary">
            <img src={share} />
          </Button>
          <Button variant="outline-primary">
            <img src={dots} />
          </Button>
        </ButtonGroup>
      </div>
      <div className="view">
        <p>
          Owned by you <a href="#">you </a>{" "}
          <img className="eye-icon" src={eyeicon} /> 1 view
          <span className="favoriteText"><img className="eye-icon" src={HeartIcon}  /> Favorites</span>
          
        </p>
      </div>
      <div className="profile-desc right-card currentPrice_Card">
        <Card>
          <Card.Body>
            <p className="currentPrice_Txt">
              Current Price <br />
              <small>
                <img src={EthIcon} alt="token icon" /> 0 <span>($0.00)</span>
              </small>
            </p>
            <div className="popupBtn_div">
              <CheckoutPopup buttontxt="Buy Now" className="light_btn mr-2" />
              <CheckoutPopup buttontxt="Make Offer" className="offer_btn" />
            </div>
          </Card.Body>
        </Card>
      </div>
      <Accordion defaultActiveKey="0" className="profile-desc right-card">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              <img src={price} /> Price History
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="trading-text">
              <Form.Control as="select" className="history-dropdown">
                <option>All Time</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
              <img src={trading} />
              <p>No trading data yet</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              <img src={listing} /> Listings
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>About Untitled Collection #2728089</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              <img src={offers} /> offers
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body className="trading-text">
              <img src={emptyoffer} />
              <p>No offers yet</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </React.Fragment>
  );
}

export default Nftright;
