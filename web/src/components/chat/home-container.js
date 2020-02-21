import React from "react";
import Navbar from "./navbar";

const style = {
  display: "grid"
};

const HomeContainer = () => {
  return (
    <div style={style}>
      <Navbar></Navbar>
    </div>
  );
};

export default HomeContainer;
