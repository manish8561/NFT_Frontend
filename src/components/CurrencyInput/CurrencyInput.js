import React from "react";
import { Form } from "react-bootstrap";
import Select from "react-select";
import EthIcon from "../../assets/Images/eth.svg";
import BtcIcon from "../../assets/Images/bitcoin.png";
import "./CurrencyInput.scss";
const options = [
  {
    value: "eth",
    label: (
      <div>
        <img src={EthIcon} />
      </div>
    ),
  },
  {
    value: "Btc",
    label: (
      <div>
        <img src={EthIcon} />
      </div>
    ),
  },
];
const CurrencyInput = (props) => {
  return (
    <Form.Group className="mb-0">
      {props.label ? <Form.Label>{props.label}</Form.Label> : null}
      <div className="comboFieldStyle currencyInput">
        <Select
          options={options}
          defaultValue={options[0]}
          classNamePrefix="react-select"
          placeholder="btc"
          label="deposit"
        />
        <Form.Control
          type="text"
          name="phone"
          className="d-flex align-items-center"
          placeholder={props.placeholder}
        />
      </div>
      {props.children}
    </Form.Group>
  );
};
export default CurrencyInput;
