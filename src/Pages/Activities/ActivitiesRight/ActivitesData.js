import React from "react";

function ActivitesData(props) {
  return (
    <>
      <tr>
        <td> {props.event}</td>
        <td>
          <img src={props.imgsrc} alt="profile" />
          {props.item}
        </td>
        <td>{props.price}</td>
        <td>{props.qty}</td>
        <td>{props.from}</td>
        <td>{props.to}</td>
        <td>{props.time}</td>
      </tr>
    </>
  );
}

export default ActivitesData;
