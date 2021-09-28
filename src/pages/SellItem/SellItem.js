import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BackButton from "../../components/BackButton/BackButton";
import ListCard from "../../components/ListCard/ListCard";
import SelectCard from "../../components/SelectCard/SelectCard";
import SummaryIcon from "../../assets/Images/summary_search_icon.svg";
import "./SellItem.scss";
import CurrencyInput from "../../components/CurrencyInput/CurrencyInput";
import SwitchButton from "../../components/SwitchButton/SwitchButton";

function MyNft() {
  return (
    <>
      <Container fluid>
        <Row className="mainTop_Row">
          <BackButton />
          <div className="collectionDiv">
            <p>Untitled Collection #2728089</p>
            <p>My NFT</p>
          </div>
        </Row>
        <Container className="selecMethod_cont">
          <Row>
            <Col xs={12} md={12} lg={12} className="p-0">
              <p className="comnHeading_Style">Select your sell method</p>
            </Col>

            <Col xs={12} md={12} lg={8}>
              <Row className="selectMethod_Row">
                <SelectCard
                  text="Set Price"
                  subtext="Sell at a fixed or declining price"
                  className="active"
                />
                <SelectCard
                  text="Highest Bid"
                  subtext="Auction to the highest bidder"
                />
                <SelectCard
                  text="Bundle"
                  subtext="Group this item with others to sell"
                />
              </Row>
              <Row className="listGroup_Style">
                <ListCard
                  text="Price"
                  subtext="Will be on sale until you transfer this item or cancel it."
                  className="priceList_group"
                >
                  <CurrencyInput placeholder="Amount" />
                </ListCard>
                <ListCard
                  text="Include ending price"
                  subtext="Adding an ending price will allow this listing to expire, or for the price to be reduced until a buyer is found."
                >
                  <SwitchButton id="ending-price"/>
                </ListCard>
                <ListCard
                  text="Schedule for a future time"
                  subtext="You can schedule this listing to only be buyable at a future date."
                >
                  <SwitchButton id="future-time" />
                </ListCard>
                <ListCard
                  text="Privacy"
                  subtext="You can keep your listing public, or you can specify one address that's allowed to buy it."
                >
                  <SwitchButton id="listing-public"/>
                </ListCard>
              </Row>
            </Col>
            <Col xs={12} md={12} lg={4} className="summaryCard_col">
              <ListCard
                text="Summary"
                icon={SummaryIcon}
                className="summaryCard_style"
              >
                <hr className="line_style" />
                <button className="light_btn postListing_btn">
                  Post Your Listing
                </button>
                <hr className="line_style" />
                <div className="feeText_style">
                  <h6 className="comnHeading_Style">Fees</h6>
                  <p className="comnSubheading_style">
                    Listing is free! At the time of the sale, the following fees
                    will be deducted. <a href="#">Learn More.</a>
                  </p>
                </div>
                <div className="totalFees_txt">
                  <p className="totalNft">
                    <span>To NFT POC</span>
                    <span className="mr-3">2.5%</span>
                  </p>
                  <p className="totalText">
                    <span>Total</span>
                    <span className="mr-3">2.5%</span>
                  </p>
                </div>
              </ListCard>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default MyNft;
