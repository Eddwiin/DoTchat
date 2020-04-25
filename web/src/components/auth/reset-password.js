import React, { useState } from "react";
import { FormGroup, Button } from "@/components/shared";
import {ToastsContainer, ToastsStore} from 'react-toasts';
import { SHA256 } from 'crypto-js';
import API from "@/utils/api";
import { useLocation } from "react-router-dom";

const ResetPassword = ({ configQueryParams }) => {
  const [password, setPassword] = useState("");
  const [rPassword, setRPassword] = useState("");
  const location = useLocation();

  const handleSubmit = () => {
    if (password !== rPassword) {
      return ToastsStore.error("Passwords are not the same");
    }

    const updateUser = {
      _id: new URLSearchParams(location.search).get("userId"),
      password: SHA256(password).toString(),
      resetPasswordToken: new URLSearchParams(location.search).get("token")
    }

    API.put('/auth/reset-password', {updateUser: updateUser}).then(res => {
      ToastsStore.success('Password has been reset');
      configQueryParams("login");
    }).catch(err => {
      ToastsStore.error('Error !');
      console.error(err);
    });

  };

  return (
    <form
    className="container__layout__content"
      onSubmit={e => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <h1 className="container__layout__content__title">Reset</h1>

      <div className="p-3">
        <FormGroup
          inputStyle={{ width: "85%" }}
          label="Password"
          name="password"
          type="password"
          placeholder="Type your password"
          value={password}
          required="required"
          onChange={e => setPassword(e.target.value)}
        />
      </div>

      <div className="p-3">
        <FormGroup
          inputStyle={{ width: "85%" }}
          label="Retype password"
          name="rPassword"
          type="password"
          placeholder="Retype your password"
          value={rPassword}
          required="required"
          onChange={e => setRPassword(e.target.value)}
        />
      </div>

      <div className="container__layout__content__link p-3">
        {/* <LinkTo redirect={APP_ROUTES.SIGNIN}> */}
          <span onClick={() => configQueryParams("login")}> Sign in</span>
        {/* </LinkTo> */}

        {/* <LinkTo redirect={APP_ROUTES.SIGNUP}> */}
          <span onClick={() => configQueryParams("registration")}>Sign up</span>
        {/* </LinkTo> */}
      </div>

      <div className="container__layout__content__submit">
        <Button label="Reset" width="w-65" />
      </div>

      <ToastsContainer store={ToastsStore}/>
    </form>
  );
};

export default ResetPassword;
