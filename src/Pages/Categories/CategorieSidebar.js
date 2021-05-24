import React from "react";
import "../../Components/Sidebar/Sidebar.scss";
import PriceSection from "../../Components/Sidebar/PriceSection";
import CollectionSection from "../../Components/Sidebar/CollectionSection";
import StatusSection from "../../Components/Sidebar/StatusSection";

function CategorieSidebar() {
  return (
    <>
      <div className="sidebar_col">
        <CollectionSection />
        <PriceSection />
        <StatusSection
          heading="Status"
          tag1="On Sale"
          tag2="Now"
          tag3="Magna"
          tag4="Has Offer"
          tag5="Dolor"
          tag6="Upcoming"
        />
      </div>
    </>
  );
}

export default CategorieSidebar;
