import React from "react";
import Sidebar from "./sidebar";
import Conversation from "./conversation";

const HomeContainer = () => {
  return (
    <div className="home-container">
      <Sidebar></Sidebar>
      <Conversation></Conversation>
    </div>
  );
};

export default HomeContainer;
