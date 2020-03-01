import React, { useState } from "react";
import APP_ROUTES from "../../../utils/route-config";
import { FormGroup } from "@/components/shared";
import { Link } from "react-router-dom";
import "./login.scss";
// import API from "@/utils/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};

  return (
    <form
      className="sign-in"
      onSubmit={e => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <h1 className="sign-in__title">Sign in</h1>

      <div className="sign-in__email">
        <FormGroup
          name="email"
          type="email"
          placeholder="Type your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>

      <div className="sign-in__password">
        <FormGroup
          name="password"
          type="password"
          placeholder="Type your password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>

      <Link to={APP_ROUTES.SIGNUP}>
        <span className="link "> Sign up?</span>
      </Link>

      <Link to={APP_ROUTES.SIGNUP}>
        <span className="link "> Sign up?</span>
      </Link>

      <input type="submit" value="Sign in" />
    </form>
  );
};

export default Login;
