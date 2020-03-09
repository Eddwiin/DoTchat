import React, { useState } from "react";
import { Button, FormGroup, LinkTo } from "@/components/shared";
import APP_ROUTES from "../../../utils/route-config";
import {ToastsContainer, ToastsStore} from 'react-toasts';
import { SHA256 } from 'crypto-js';
import API from "@/utils/api";

const Registration = ({ history }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rPassword, setRPassword] = useState("");

  const handleSubmit = () => {
    if (password !== rPassword) {
      return ToastsStore.error("Passwords are not the same");
    }

    const user = {
      username: username,
      email: email,
      password: SHA256(password).toString()
    }

    API.post("/user/save", { user: user}).then(res => {
      console.log(res);
      if (res.status === 200) {
        ToastsStore.success('User has been created', 4000);
        return history.push(APP_ROUTES.SIGNIN);
      } else if (res.status === 201 && res.data.message) {
        return ToastsStore.error(res.data.message, 3000);
      } else {
        return ToastsStore.error('Error !', 3000); 
      }
    }).catch(console.error);
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
          label="Username"
          name="username"
          placeholder="Type your username"
          value={username}
          onChange={e => setUsername(e.target.value)}
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

      <ToastsContainer store={ToastsStore}/>
    </form>
  );
};

export default Registration;
