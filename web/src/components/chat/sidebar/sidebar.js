import React from "react";
import "./sidebar.scss";
import { Autocomplete } from "@/components/shared";
// import { Card } from "@/components/shared";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__autocomplete">
        <Autocomplete
          suggestions={["White", "Black", "Green", "Blue", "Yellow", "Red"]}
        ></Autocomplete>
      </div>

      <div className="sidebar__recents">Récents</div>
    </div>
  );
};

export default Sidebar;
