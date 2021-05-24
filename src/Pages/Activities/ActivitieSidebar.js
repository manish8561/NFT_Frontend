import React from "react";
import CollectionSection from "../../Components/Sidebar/CollectionSection";
import StatusSection from "../../Components/Sidebar/StatusSection";

function ActivitieSidebar() {
  return (
    <>
      <div className="sidebar_col">
        <CollectionSection />
        <StatusSection
          heading="Event"
          tag1="Listings"
          tag2="Bids"
          tag3="Sales"
          tag4="Transfers"
          tag5="Offers"
        />
      </div>
    </>
  );
}

export default ActivitieSidebar;
