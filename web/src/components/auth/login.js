import React, { useState } from "react";
import Button from "@/components/shared/button";
import { Link } from "react-router-dom";
import APP_ROUTES from "../../utils/route-config";

const btnPosition = {
  marginLeft: "10rem",
  marginTop: "2rem"
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__group">
        <input
          id="email"
          className="form__input "
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <label htmlFor="id" className="form__label">
          Email
        </label>
      </div>

      <div className="form__group">
        <input
          id="password"
          className="form__input"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <label htmlFor="password" className="form__label">
          Password
        </label>
      </div>

      <div className="block">
        <Link to={APP_ROUTES.FORGETPASSWORD}>
          <span className="link ">Password forgot?</span>
        </Link>
      </div>

      <div className="block">
        <Link to={APP_ROUTES.SIGNUP}>
          <span className="link "> Sign up?</span>
        </Link>
      </div>

      <div style={btnPosition}>
        <Button label="LOGIN" btnColor="primary"></Button>
      </div>
    </form>
  );
};

export default Login;
