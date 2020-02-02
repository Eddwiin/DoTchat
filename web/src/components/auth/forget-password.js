import React, { useState } from "react";
import { Link } from "react-router-dom";
import APP_ROUTES from "../../utils/route-config";
import Button from "@/components/shared/button";

const btnPosition = {
  marginLeft: "10rem",
  marginTop: "2rem"
};

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__group">
          <input
            type="email"
            className="form__input"
            name="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="block">
          <Link to={APP_ROUTES.SIGNIN}>
            <span className="link ">Sign in?</span>
          </Link>
        </div>

        <div className="block">
          <Link to={APP_ROUTES.SIGNUP}>
            <span className="link ">Sign up?</span>
          </Link>
        </div>

        <div style={btnPosition}>
          <Button label="SEND" btnColor="primary"></Button>
        </div>
      </form>
    </div>
  );
};

export default ForgetPassword;
