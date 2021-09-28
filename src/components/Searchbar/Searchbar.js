import React from "react";
import { Col, Form, Row, ButtonGroup, Button } from "react-bootstrap";
import searchicon from "../../assets/Images/searchicon.svg";
import gridgrey from "../../assets/Images/greygrid.svg";
import gridblue from "../../assets/Images/bluegrid.svg";
import Select from "react-select";
import "./Searchbar.scss";
function Searchbar() {
  const tokenoptions = [
    {
      value: "Single items",
      label: "Single items",
    },
    {
      value: "Single items",
      label: "Single items",
    },
    {
      value: "Single items",
      label: "Single items",
    },
  ];
  return (
    <div className="collection-modal  searchbar">
      <Form className="info-form p-0">
        <Row className="m-0">
          <Col md={7} className="p-10">
            <Form.Group controlId="formPlaintextEmail">
              <Form.Control
                className="search-control"
                type="text"
                placeholder="Search"
              />
              <span className="searchicon">
                <img src={searchicon} />
              </span>
            </Form.Group>
          </Col>
          <Col className="p-0 inputfield-card">
            <Form.Group controlId="formPlaintextPassword">
              <Select
                options={tokenoptions}
                className="form-control"
                options={tokenoptions}
                classNamePrefix="react-select"
                placeholder="Single items"
                label="Single items"
                // menuIsOpen="true"
              />
            </Form.Group>
          </Col>
          <Col className="inputfield-card p-0 m-10">
            <Form.Group controlId="formPlaintextPassword">
              <Select
                options={tokenoptions}
                className="form-control"
                options={tokenoptions}
                classNamePrefix="react-select"
                placeholder="Price : Low to High"
                label="Price : Low to High"
                // menuIsOpen="true"
              />
            </Form.Group>
          </Col>
          <Col className="p-0 m-10">
            <ButtonGroup aria-label="Basic example" className=" grid-btn">
              <Button variant="outline-light">
                <img src={gridblue} />
              </Button>
              <Button variant="outline-light">
                <img src={gridgrey} />
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default Searchbar;
