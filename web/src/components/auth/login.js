import React, { useState } from "react";
import APP_ROUTES from "../../utils/route-config";
import { FormGroup, LinkTo, Button } from "@/components/shared";
import API from '@/utils/api';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {

    API.post("/auth/sign-in").then(console.log);
  };

  return (
    <form
      className="view-index__layout__sign-in"
      onSubmit={e => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <h1 className="view-index__layout__sign-in__title">Sign in</h1>

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

      <div className="view-index__layout__sign-in__link p-3">
        <LinkTo redirect={APP_ROUTES.SIGNUP}>
          <span> Sign up</span>
        </LinkTo>

        <LinkTo redirect={APP_ROUTES.FORGETPASSWORD}>
          <span>Forget password</span>
        </LinkTo>
      </div>

      <div className="view-index__layout__sign-in__submit">
        <Button label="Sign in" width="w-65" isAnimate={true} />
      </div>
    </form>
  );
};

export default Login;
