import React from "react";

function StatusSection(props) {
  return (
    <>
      <h3> {props.heading}</h3>
      <ul className="status_sec">
        <li>
          <a href="#"> {props.tag1}</a>
        </li>
        <li>
          <a href="#" className="active">
            {props.tag2}
          </a>
        </li>
        <li>
          <a href="#"> {props.tag3}</a>
        </li>
        <li>
          <a href="#">{props.tag4}</a>
        </li>
        <li>
          <a href="#"> {props.tag5}</a>
        </li>
        <li>
          <a href="#"> {props.tag6}</a>
        </li>
      </ul>
    </>
  );
}

export default StatusSection;
