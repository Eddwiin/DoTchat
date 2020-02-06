import React from "react";
// import Autocomplete from "@/components/shared/autocomplete/autocomplete";
import Card from "@/components/shared/card";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__content">
        <div className="sidebar__content__autocomplete">
          {/* <Autocomplete
            suggestions={["White", "Black", "Green", "Blue", "Yellow", "Red"]}
          ></Autocomplete> */}
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
