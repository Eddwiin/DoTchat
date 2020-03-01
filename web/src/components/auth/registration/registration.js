import React, { useState } from "react";
import { Button, FormGroup, LinkTo } from "@/components/shared";
import APP_ROUTES from "../../../utils/route-config";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");
  const [rPassword, setRPassword] = useState("");

  const handleSubmit = () => {
    console.log("form submit");
  };

  return (
    <form
      className="view-index__layout__sign-up"
      onSubmit={e => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <h1 className="view-index__layout__sign-up__title">Sign up</h1>

      <div className="p-3">
        <FormGroup
          label="Pseudo"
          name="pseudo"
          type="email"
          placeholder="Type your pseudo"
          value={pseudo}
          onChange={e => setPseudo(e.target.value)}
        />
      </div>

      <div className="p-3">
        <FormGroup
          label="Email"
          name="email"
          type="email"
          placeholder="Type your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>

      <div className="p-3">
        <FormGroup
          label="Password"
          name="password"
          type="password"
          placeholder="Type your password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>

      <div className="p-3">
        <FormGroup
          label="Retype password"
          name="RPassword"
          type="password"
          placeholder="Retype your password"
          value={rPassword}
          onChange={e => setRPassword(e.target.value)}
        />
      </div>

      <div className="view-index__layout__sign-in__link p-3">
        <LinkTo redirect={APP_ROUTES.SIGNIN}>
          <span> Sign in</span>
        </LinkTo>

        <LinkTo redirect={APP_ROUTES.FORGETPASSWORD}>
          <span>Forget password</span>
        </LinkTo>
      </div>

      <div className="view-index__layout__sign-in__submit">
        <Button label="Sign up" width="w-65" />
      </div>
    </form>
  );
};

export default Registration;
