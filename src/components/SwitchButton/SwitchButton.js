import React from "react";
import {Form } from "react-bootstrap";
import "./SwitchButton.scss";

function SwitchButton(props) {
  return (
    <div className="switch-toggle">
      <Form.Check type="switch" id={props.id} />
    </div>
  );
}

export default SwitchButton;
