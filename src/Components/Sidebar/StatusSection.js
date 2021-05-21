import React from "react";

function StatusSection() {
  return (
    <>
    <h3>Status</h3>
      <ul className="status_sec">
        <li>
          <a href="#">On Sale</a>
        </li>
        <li>
          <a href="#" className="active">Now</a>
        </li>
        <li>
          <a href="#">Magna</a>
        </li>
        <li>
          <a href="#">Has Offer</a>
        </li>
        <li>
          <a href="#">Dolor</a>
        </li>
        <li>
          <a href="#">Upcoming</a>
        </li>
      </ul>
    </>
  );
}

export default StatusSection;
