import React, { useState } from "react";
import APP_ROUTES from "../../utils/route-config";
import { FormGroup, LinkTo, Button } from "@/components/shared";
import API from "@/utils/api";
import {ToastsContainer, ToastsStore} from 'react-toasts';

const urlResetStyle = {
  wordBreak: "break-word",
  paddingRight: "2rem",
  paddingLeft: "2rem",
  paddingTop: ".5rem",
  backgroundColor: "#cce5ff",
  width: "95%",
  marginLeft: "1rem",
  fontSize: "1.1rem"
}

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [urlToReset, setUrlToReset] = useState("");

  const loadUrlResetPassword = () => {
    if (urlToReset) {
      return <div style={urlResetStyle}>Reset on this url: {urlToReset}</div>;
    }
  }

  const handleSubmit = () => {
    API.get(`/auth/forget-password?email=${email}`)
    .then(res =>  setUrlToReset(res.data.urlToReset))
    .catch(err => {
      console.error(err);
      if (err.response && err.response.status === 400) {
        return ToastsStore.error(err.response.data.message);
      }
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
      <h1 className="container__layout__content__title">Forget</h1>

      {loadUrlResetPassword()}


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

      <div className="container__layout__content__link p-3">
        <LinkTo redirect={APP_ROUTES.SIGNIN}>
          <span> Sign in</span>
        </LinkTo>

        <LinkTo redirect={APP_ROUTES.SIGNUP}>
          <span>Sign up</span>
        </LinkTo>
      </div>

      <div className="container__layout__content__submit">
        <Button label="Send email" width="w-65" />
      </div>

      <ToastsContainer store={ToastsStore}/>
    </form>
  );
};

export default ForgetPassword;
