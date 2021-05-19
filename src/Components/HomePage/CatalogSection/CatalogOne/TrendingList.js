import React, { Component } from "react";
import PaintTextures from "../../../../Assets/Images/paint-textures.png";

export class TrendingList extends Component {
  render() {
    return (
      <>
        <div className="col_left">
          <div className="div_left">
            <p>William Leo</p>
            <img src={PaintTextures} alt="paint-textures" />
          </div>
          <div className="div_right">
            <h2>New Trends in Art Design</h2>
            <p>
              Quisque rhoncus orci vitae nisl retrum reuturm lesuada laoreet
              umrna sed
            </p>
            <h4>
              Over <span>150</span> Art Design
            </h4>
          </div>
        </div>
      </>
    );
  }
}

export default TrendingList;
