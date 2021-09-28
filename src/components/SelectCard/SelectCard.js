import React from "react";
import "./SelectCard.scss";

function SelectCard(props) {
  return (
    <div className={`selectMethod_Card ${props.className}`}>
      <h6 className="comnHeading_Style">{props.text}</h6>
      <p className="comnSubheading_style">{props.subtext}</p>
    </div>
  );
}

export default SelectCard;
