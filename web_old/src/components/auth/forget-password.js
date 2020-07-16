import React, { useState } from "react";
import { FormGroup, Button } from "@/components/shared";
import API from "@/utils/api";
import {ToastsContainer, ToastsStore} from 'react-toasts';
import { AlertMessage } from "../shared/alert-message/alert-message";

const ForgetPassword = ({ configQueryParams }) => {
  const [email, setEmail] = useState("");
  const [urlToReset, setUrlToReset] = useState("");

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

      { urlToReset && <AlertMessage>
            <span>
              Click <a href={urlToReset} target="_blank" rel="noopener noreferrer">here</a> to reset password
            </span>
      </AlertMessage>}

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
        {/* <LinkTo redirect={APP_ROUTES.SIGNIN}> */}
          <span onClick={() => configQueryParams("login")}> Sign in</span>
        {/* </LinkTo> */}

        {/* <LinkTo redirect={APP_ROUTES.SIGNUP}> */}
          <span onClick={() => configQueryParams("registration")}>Sign up</span>
        {/* </LinkTo> */}
      </div>

      <div className="container__layout__content__submit">
        <Button label="Send email" width="w-65" />
      </div>

      <ToastsContainer store={ToastsStore}/>
    </form>
  );
};

export default ForgetPassword;
