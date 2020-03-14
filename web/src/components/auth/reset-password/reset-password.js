import React, { useState } from "react";
import APP_ROUTES from "../../../utils/route-config";
import { FormGroup, LinkTo, Button } from "@/components/shared";
import {ToastsContainer, ToastsStore} from 'react-toasts';
import { SHA256 } from 'crypto-js';
import API from "@/utils/api";
import { useParams, useHistory } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [rPassword, setRPassword] = useState("");
  const { id, token } = useParams();
  const history = useHistory();

  const handleSubmit = () => {
    if (password !== rPassword) {
      return ToastsStore.error("Passwords are not the same");
    }

    const updateUser = {
      _id: id,
      password: SHA256(password).toString(),
      resetPasswordToken: token
    }

    API.put('/auth/reset-password', {updateUser: updateUser}).then(res => {
      ToastsStore.success('Password has been reset');
      return history.push(APP_ROUTES.SIGNIN);
    }).catch(err => {
      ToastsStore.error('Error !');
      console.error(err);
    });

  };

  return (
    <form
      className="view-index__layout__reset-password"
      onSubmit={e => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <h1 className="view-index__layout__reset-password__title">Reset</h1>

      <div className="p-3">
        <FormGroup
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
          label="Retype password"
          name="rPassword"
          type="password"
          placeholder="Retype your password"
          value={rPassword}
          required="required"
          onChange={e => setRPassword(e.target.value)}
        />
      </div>

      <div className="view-index__layout__reset-password__link p-3">
        <LinkTo redirect={APP_ROUTES.SIGNIN}>
          <span> Sign in</span>
        </LinkTo>

        <LinkTo redirect={APP_ROUTES.SIGNUP}>
          <span>Sign up</span>
        </LinkTo>
      </div>

      <div className="view-index__layout__reset-password__submit">
        <Button label="Reset" width="w-65" isAnimate={true} />
      </div>

      <ToastsContainer store={ToastsStore}/>
    </form>
  );
};

export default ResetPassword;
