import React from "react";
import "./ListCard.scss";

function ListCard(props) {
  return (
    <div className={`listGroup_Item ${props.className}`}>
      <div className="listItem_Text">
        <h6 className="comnHeading_Style">
          {props.icon ? <img src={props.icon} alt="icon" className="icon_Style" /> : null}
          {props.text}
        </h6>
        <p className="comnSubheading_style">{props.subtext}</p>
      </div>
      {props.children}
    </div>
  );
}

export default ListCard;
