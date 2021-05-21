import React from "react";
import { Form, Dropdown } from "react-bootstrap";

function PriceSection() {
  return (
    <>
      <h3>Price Range</h3>
      <Dropdown className="custom_dropdown">
        <Dropdown.Toggle className="drop_btn">USDT</Dropdown.Toggle>
        <Dropdown.Menu className="drop_menu">
          <Dropdown.Item href="#/action-1">ABC</Dropdown.Item>
          <Dropdown.Item href="#/action-2">DEF</Dropdown.Item>
          <Dropdown.Item href="#/action-3">GHI</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Form>
        <Form.Group controlId="formBasicRange">
          <Form.Control type="range" />
        </Form.Group>
        <p>
          <span>Price:</span> $10 - $200
        </p>
      </Form>
    </>
  );
}

export default PriceSection;
