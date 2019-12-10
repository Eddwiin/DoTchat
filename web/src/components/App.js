import React from "react";
import "./App.scss";

function App() {
  return (
    <div className="view-index">
      <div className="view-index__body">
        <h1 className="view-index__title">
          <span className="view-index__title--main">DotChat</span>
          <span className="view-index__title--sub">
            Communicate with the world
          </span>
        </h1>

        <a href="#" className="btn btn--white">
          Sign in
        </a>
      </div>
    </div>
  );
}

export default App;
