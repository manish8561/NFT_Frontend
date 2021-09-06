import React from "react";

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
          <p>{props.desc}</p>
          <h4>
            Over <span>{props.count}</span> {props.category}
          </h4>
        </div>
      </div>
    </>
  );
}

export default TrendingList;
