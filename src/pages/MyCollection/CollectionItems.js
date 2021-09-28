import React, { Component } from "react";
import { Button } from "react-bootstrap";
import HeartRed from "../../assets/Images/heart.svg";
import Heartlite from "../../assets/Images/heartlite.svg";

function CollectionItems(props) {
  return (
    <>
      <div className="business-list">
        <span className="favorite">
          {props.favorite ? <img src={HeartRed} /> : <img src={Heartlite} />}
          {props.favorite ? 1 : 0}
        </span>
        <div className="business-img">
          <img className="list-img" src={props.thumb} />
        </div>
        <div className="business-info">
          <div className="title-info">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
          </div>
          <p className="price">
            <img src={props.icon} />
            {props.price}
          </p>
        </div>
        <div className="overlay">
          <div className="overlay-btns">
            <Button href="#" className="read-btn">
              Read More{" "}
            </Button>
            <Button href="#" className="buy-btn">
              Buy Now{" "}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CollectionItems;
