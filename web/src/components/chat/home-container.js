import React from "react";
import Navbar from "./navbar/navbar";
import Sidebar from "./sidebar/sidebar";
import Conversation from "./conversation/conversation";
import WriteText from "./write-text/write-text";
import "./home-container.scss";

const HomeContainer = () => {
  return (
    <div className="home-container">
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Conversation></Conversation>
      <WriteText></WriteText>
    </div>
  );
};

export default HomeContainer;
