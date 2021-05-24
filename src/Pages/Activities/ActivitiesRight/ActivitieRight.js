import React from "react";
import ListProfile from "../../../Assets/Images/listprofile.png";
import { Table, Dropdown } from "react-bootstrap";
import ActivitesData from "./ActivitesData";

function ActivitieRight() {
  return (
    <>
      <div className="activityRight">
        <div className="activity_top">
          <h3>Trading History</h3>
          <Dropdown className="custom_dropdown">
            <Dropdown.Toggle className="drop_btn">All items</Dropdown.Toggle>
            <Dropdown.Menu className="drop_menu">
              <Dropdown.Item href="#/action-1">ABC items</Dropdown.Item>
              <Dropdown.Item href="#/action-2">DEF items</Dropdown.Item>
              <Dropdown.Item href="#/action-3">GHI items</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <Table responsive>
          <thead>
            <tr>
              <th>Event</th>
              <th>Item</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>From</th>
              <th>To</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <ActivitesData
              event="Bids"
              imgsrc={ListProfile}
              item="Lorem ipsum dolor sit amet"
              price="0.4206"
              qty="21"
              from="Lorem ipsum"
              to="Dolor sit amet"
              time="02:10:32"
            />
            <ActivitesData
              event="Bids"
              imgsrc={ListProfile}
              item="Consectetur Adipiscing Morbi Vehicula"
              price="0.4206"
              qty="5"
              from="Lorem ipsum"
              to="Dolor sit amet"
              time="02:10:32"
            />
            <ActivitesData
              event="Bids"
              imgsrc={ListProfile}
              item="Lorem ipsum dolor sit amet"
              price="0.4206"
              qty="215"
              from="Lorem ipsum"
              to="Dolor sit amet"
              time="02:10:32"
            />
            <ActivitesData
              event="Sales"
              imgsrc={ListProfile}
              item="Lorem ipsum dolor sit amet"
              price="0.4206"
              qty="37"
              from="Lorem ipsum"
              to="Dolor sit amet"
              time="02:10:32"
            />
            <ActivitesData
              event="Offers"
              imgsrc={ListProfile}
              item="Lorem ipsum dolor sit amet"
              price="0.4206"
              qty="165"
              from="Lorem ipsum"
              to="Dolor sit amet"
              time="02:10:32"
            />
            <ActivitesData
              event="Listings"
              imgsrc={ListProfile}
              item="Lorem ipsum dolor sit amet"
              price="0.4206"
              qty="33"
              from="Lorem ipsum"
              to="Dolor sit amet"
              time="02:10:32"
            />
            <ActivitesData
              event="Transfers"
              imgsrc={ListProfile}
              item="Lorem ipsum dolor sit amet"
              price="0.4206"
              qty="21"
              from="Lorem ipsum"
              to="Dolor sit amet"
              time="02:10:32"
            />
            <ActivitesData
              event="Sales"
              imgsrc={ListProfile}
              item="Lorem ipsum dolor sit amet"
              price="1.03659"
              qty="4"
              from="Lorem ipsum"
              to="Dolor sit amet"
              time="02:10:32"
            />
            <ActivitesData
              event="Offers"
              imgsrc={ListProfile}
              item="Lorem ipsum dolor sit amet"
              price="0.4206"
              qty="2"
              from="Lorem ipsum"
              to="Dolor sit amet"
              time="02:10:32"
            />
            <ActivitesData
              event="Listings"
              imgsrc={ListProfile}
              item="Lorem Ipsum Dolor Consectetur"
              price="0.4206"
              qty="105"
              from="Lorem ipsum"
              to="Dolor sit amet"
              time="02:10:32"
            />
            <ActivitesData
              event="Transfers"
              imgsrc={ListProfile}
              item="Lorem ipsum dolor sit amet"
              price="0.4206"
              qty="25"
              from="Lorem ipsum"
              to="Dolor sit amet"
              time="02:10:32"
            />
            <ActivitesData
              event="Offers"
              imgsrc={ListProfile}
              item="Mattis Quisque do Libero"
              price="62.356"
              qty="21"
              from="Lorem ipsum"
              to="Dolor sit amet"
              time="02:10:32"
            />
            <ActivitesData
              event="Listings"
              imgsrc={ListProfile}
              item="Lorem ipsum dolor sit amet"
              price="0.4206"
              qty="27"
              from="Lorem ipsum"
              to="Dolor sit amet"
              time="02:10:32"
            />
            <ActivitesData
              event="Bids"
              imgsrc={ListProfile}
              item="Lorem ipsum dolor sit amet"
              price="1.03659"
              qty="61"
              from="Lorem ipsum"
              to="Dolor sit amet"
              time="02:10:32"
            />
            <ActivitesData
              event="Sales"
              imgsrc={ListProfile}
              item="Metus Vitae Fermentum"
              price="62.356"
              qty="52"
              from="Lorem ipsum"
              to="Dolor sit amet"
              time="02:10:32"
            />
            <ActivitesData
              event="Offers"
              imgsrc={ListProfile}
              item="Magna Luctus"
              price="102.366"
              qty="21"
              from="Lorem ipsum"
              to="Dolor sit amet"
              time="02:10:32"
            />
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default ActivitieRight;
