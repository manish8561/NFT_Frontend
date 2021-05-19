import React, { Component } from "react";
import PaintTextures from "../../../../Assets/Images/paint-textures.png";

function TrendingList(props) {
  return (
    <>
      <div className="col_left">
        <div className="div_left">
          <p>{props.name}</p>
          <img src={props.imgsrc} />
        </div>
        <div className="div_right">
          <h2>{props.heading}</h2>
          <p> {props.sheading}</p>
          <h4>
            Over <span>150</span> Art Design
          </h4>
        </div>
      </div>
    </>
  );
}

export default TrendingList;
