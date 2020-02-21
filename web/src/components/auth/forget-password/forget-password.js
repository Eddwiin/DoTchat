import React, { useState } from "react";
import { Link } from "react-router-dom";
import APP_ROUTES from "../../../utils/route-config";
import API from "@/utils/api";
import { ToastsStore } from "react-toasts";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [urlToReset, setUrlToReset] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    API.get(`/auth/forgotPassword?email=${email}`).then(res => {
      if (res.status === 201) {
        return ToastsStore.error(res.data.message);
      }
      setUrlToReset(res.data.urlToReset);
    });
  };

  return (
    <div>
      {() => {
        if (urlToReset) {
          return <div>Reset on this url: {urlToReset}</div>;
        }
      }}

      <div>{urlToReset}</div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__group">
          <input
            type="email"
            className="form__input"
            name="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="block">
          <Link to={APP_ROUTES.SIGNIN}>
            <span className="link ">Sign in?</span>
          </Link>
        </div>

        <div className="block">
          <Link to={APP_ROUTES.SIGNUP}>
            <span className="link ">Sign up?</span>
          </Link>
        </div>

        <input type="submit" value="Send" />

        {/* <div style={btnPosition}>
          <Button label="SEND" btnColor="primary"></Button>
        </div> */}
      </form>
    </div>
  );
};

export default ForgetPassword;
