import React from "react";
import { Col, Dropdown, Row, Container } from "react-bootstrap";
import Searcbar from "../../components/Searchbar/Searchbar";
import CollectionItems from "../MyCollection/CollectionItems";
import collections_items1 from "../../assets/Images/collections_items1.png";
import collections_items2 from "../../assets/Images/collections_items2.png";
import collections_items3 from "../../assets/Images/collections_items3.png";
import collections_items4 from "../../assets/Images/collections_items4.png";
import "../MyCollection/MyCollection.scss";
import TopLinks from "../../components/TopLinks/TopLinks";
import EthIcon from "../../assets/Images/eth.svg";

function CategorieRight() {
  return (
    <>
      <div className="right_sec">
        <TopLinks />

        {/* <div className="right_sec_top">
          <h3>78,415 results</h3>
          <Dropdown className="custom_dropdown">
            <Dropdown.Toggle className="drop_btn">All items</Dropdown.Toggle>
            <Dropdown.Menu className="drop_menu">
              <Dropdown.Item href="#/action-1">ABC items</Dropdown.Item>
              <Dropdown.Item href="#/action-2">DEF items</Dropdown.Item>
              <Dropdown.Item href="#/action-3">GHI items</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div> */}
        <Container fluid className="collection">
          <Container className="custom-cont ContMain">
            <Row className="marketplaceTop_Row">
              100 results
              <Searcbar />
            </Row>

            <Row>
              <div className="coll-box">
                <div className=" item-col">
                  <Row>
                    <Col sm={6} lg={3} className="p-0">
                      <CollectionItems
                        thumb={collections_items1}
                        title="William Leo "
                        text="Art World"
                        price="155.99"
                        icon={EthIcon}
                        favorite
                      ></CollectionItems>
                    </Col>
                    <Col sm={6} lg={3} className="p-0">
                      <CollectionItems
                        thumb={collections_items2}
                        title="Jacks Oscar "
                        text="Art World"
                        price="155.99"
                        icon={EthIcon}
                      ></CollectionItems>
                    </Col>
                    <Col sm={6} lg={3} className="p-0">
                      <CollectionItems
                        thumb={collections_items3}
                        title="William Leo "
                        text="Art World"
                        price="155.99"
                      ></CollectionItems>
                    </Col>
                    <Col sm={6} lg={3} className="p-0">
                      <CollectionItems
                        thumb={collections_items4}
                        title="Jacks Oscar "
                        text="Art World"
                        price="155.99"
                        icon={EthIcon}
                      ></CollectionItems>
                    </Col>
                    <Col sm={6} lg={3} className="p-0">
                      <CollectionItems
                        thumb={collections_items3}
                        title="William Leo "
                        text="Art World"
                        price="155.99"
                        favorite
                      ></CollectionItems>
                    </Col>
                    <Col sm={6} lg={3} className="p-0">
                      <CollectionItems
                        thumb={collections_items4}
                        title="Jacks Oscar "
                        text="Art World"
                        price="155.99"
                        icon={EthIcon}
                      ></CollectionItems>
                    </Col>
                    <Col sm={6} lg={3} className="p-0">
                      <CollectionItems
                        thumb={collections_items1}
                        title="William Leo "
                        text="Art World"
                        price="155.99"
                        icon={EthIcon}
                        favorite
                      ></CollectionItems>
                    </Col>
                    <Col sm={6} lg={3} className="p-0">
                      <CollectionItems
                        thumb={collections_items2}
                        title="Jacks Oscar "
                        text="Art World"
                        price="155.99"
                        icon={EthIcon}
                        favorite
                      ></CollectionItems>
                    </Col>
                    <Col sm={6} lg={3} className="p-0">
                      <CollectionItems
                        thumb={collections_items1}
                        title="William Leo "
                        text="Art World"
                        price="155.99"
                        icon={EthIcon}
                      ></CollectionItems>
                    </Col>
                    <Col sm={6} lg={3} className="p-0">
                      <CollectionItems
                        thumb={collections_items2}
                        title="Jacks Oscar "
                        text="Art World"
                        price="155.99"
                        icon={EthIcon}
                      ></CollectionItems>
                    </Col>
                    <Col sm={6} lg={3} className="p-0">
                      <CollectionItems
                        thumb={collections_items3}
                        title="William Leo "
                        text="Art World"
                        price="155.99"
                        icon={EthIcon}
                      ></CollectionItems>
                    </Col>
                    <Col sm={6} lg={3} className="p-0">
                      <CollectionItems
                        thumb={collections_items4}
                        title="Jacks Oscar "
                        text="Art World"
                        price="155.99"
                        icon={EthIcon}
                      ></CollectionItems>
                    </Col>
                    <Col sm={6} lg={3} className="p-0">
                      <CollectionItems
                        thumb={collections_items1}
                        title="William Leo "
                        text="Art World"
                        price="155.99"
                        icon={EthIcon}
                      ></CollectionItems>
                    </Col>
                    <Col sm={6} lg={3} className="p-0">
                      <CollectionItems
                        thumb={collections_items2}
                        title="Jacks Oscar "
                        text="Art World"
                        price="155.99"
                        icon={EthIcon}
                        favorite
                      ></CollectionItems>
                    </Col>
                    <Col sm={6} lg={3} className="p-0">
                      <CollectionItems
                        thumb={collections_items3}
                        title="William Leo "
                        text="Art World"
                        price="155.99"
                        icon={EthIcon}
                        favorite
                      ></CollectionItems>
                    </Col>
                    <Col sm={6} lg={3} className="p-0">
                      <CollectionItems
                        thumb={collections_items4}
                        title="Jacks Oscar "
                        text="Art World"
                        price="155.99"
                        icon={EthIcon}
                      ></CollectionItems>
                    </Col>
                  </Row>
                </div>
              </div>
            </Row>
          </Container>
        </Container>
      </div>
    </>
  );
}

export default CategorieRight;
