import React, { useState } from "react";
import { Button, FormGroup } from "@/components/shared";
import {ToastsContainer, ToastsStore} from 'react-toasts';
import { SHA256 } from 'crypto-js';
import API from "@/utils/api";

const Registration = ({ configQueryParams }) => {
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

    API.post("/user", { user: user}).then(res => {
      if (res.status === 200) {
        ToastsStore.success('User has been created', 4000);
        return configQueryParams("login");
        // return history.push(APP_ROUTES.SIGNIN);
      } else if (res.status === 201 && res.data.message) {
        return ToastsStore.error(res.data.message, 3000);
      } else {
        return ToastsStore.error('Error !', 3000); 
      }
    }).catch(console.error);
  };

  return (
    <form
      className="container__layout__content"
      onSubmit={e => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <h1 className="container__layout__content__title">Sign up</h1>

      <div className="p-3">
        <FormGroup
          inputStyle={{ width: "85%" }}
          label="Username"
          name="username"
          placeholder="Type your username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </div>

      <div className="p-3">
        <FormGroup
          inputStyle={{ width: "85%" }}
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
          inputStyle={{ width: "85%" }}
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
          inputStyle={{ width: "85%" }}
          label="Retype password"
          name="RPassword"
          type="password"
          placeholder="Retype your password"
          value={rPassword}
          onChange={e => setRPassword(e.target.value)}
        />
      </div>

      <div className="container__layout__content__link p-3">
        {/* <LinkTo redirect={APP_ROUTES.SIGNIN}> */}
          <span onClick={() => configQueryParams("login")}> Sign in</span>
        {/* </LinkTo> */}

        {/* <LinkTo redirect={APP_ROUTES.FORGETPASSWORD}> */}
          <span onClick={() => configQueryParams("forget-password")}>Forget password</span>
        {/* </LinkTo> */}
      </div>

      <div className="container__layout__content__submit">
        <Button label="Sign up" width="w-65" />
      </div>

      <ToastsContainer store={ToastsStore}/>
    </form>
  );
};

export default Registration;
