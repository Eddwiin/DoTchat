import React, { useState } from "react";
import APP_ROUTES from "../../../utils/route-config";
import { FormGroup, LinkTo } from "@/components/shared";
import "./login.scss";
// import API from "@/utils/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log("form submit");
  };

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
          label="Email"
          name="email"
          type="email"
          placeholder="Type your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>

      <div className="sign-in__password">
        <FormGroup
          label="Password"
          name="password"
          type="password"
          placeholder="Type your password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>

      <div className="sign-in__link">
        <LinkTo redirect={APP_ROUTES.SIGNUP}>
          <span className="sign-in__link__sign-up "> Sign up</span>
        </LinkTo>

        <LinkTo redirect={APP_ROUTES.SIGNUP}>
          <span className="sign-in__link__forget-password">
            Forget password
          </span>
        </LinkTo>
      </div>

      <div className="sign-in__submit">
        <button className="btn btn--primary" type="submit">
          Sign in
        </button>
      </div>
    </form>
  );
};

export default Login;
