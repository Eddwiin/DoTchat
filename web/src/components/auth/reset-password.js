import React, { useState } from "react";
import APP_ROUTES from "../../utils/route-config";
import Button from "@/components/shared/button";
import { Link } from "react-router-dom";

const btnPosition = {
  marginLeft: "10rem",
  marginTop: "2rem"
};

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [rPassword, setRPassword] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__group">
        <input
          id="password"
          className="form__input"
          type="password"
          name="password"
          placeholder="Password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <label htmlFor="password" className="form__label">
          Password
        </label>
      </div>

      <div className="form__group">
        <input
          id="rPassword"
          className="form__input"
          type="password"
          name="rPassword"
          placeholder="Re-type password"
          required
          value={rPassword}
          onChange={e => setRPassword(e.target.value)}
        />
        <label htmlFor="rPassword" className="form__label">
          Re-type password
        </label>
      </div>

      <div className="block">
        <Link to={APP_ROUTES.SIGNIN}>
          <span className="link "> Sign in?</span>
        </Link>
      </div>

      <div style={btnPosition}>
        <Button label="RESET" btnColor="primary"></Button>
      </div>
    </form>
  );
};

export default ResetPassword;
