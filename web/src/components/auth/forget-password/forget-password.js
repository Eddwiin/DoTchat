import React, { useState } from "react";
import APP_ROUTES from "../../../utils/route-config";
import { FormGroup, LinkTo, Button } from "@/components/shared";
import API from "@/utils/api";
import {ToastsContainer, ToastsStore} from 'react-toasts';

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [urlToReset, setUrlToReset] = useState("");

  const handleSubmit = () => {
    API.get(`/auth/forget-password?email=${email}`).then(res => {
      if (res.status === 201) {
        return ToastsStore.error(res.data.message);
      }
      setUrlToReset(undefined);
    }).catch(err => {
      console.log(err);
      // if (err.response.status === 400) {
      //   return ToastsStore.error(err.response.data.message);
      // }
    });
  };


  return (
    
    <form
      className="view-index__layout__forget-password"
      onSubmit={e => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <h1 className="view-index__layout__forget-password__title">Forget</h1>

      {/* {() => {
        if (urlToReset) {
          return <div>Reset on this url: {urlToReset}</div>;
        }
      }} */}

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

      <div className="view-index__layout__forget-password__link p-3">
        <LinkTo redirect={APP_ROUTES.SIGNIN}>
          <span> Sign in</span>
        </LinkTo>

        <LinkTo redirect={APP_ROUTES.SIGNUP}>
          <span>Sign up</span>
        </LinkTo>
      </div>

      <div className="view-index__layout__forget-password__submit">
        <Button label="Send email" width="w-65" isAnimate={true} />
      </div>

      <ToastsContainer store={ToastsStore}/>
    </form>
  );
};

export default ForgetPassword;
