import React, { useState } from "react";
import Button from "@/components/shared/button";
import "@scss/components/shared/form.scss";
import { Link } from "react-router-dom";
import APP_ROUTES from "../../utils/route-config";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__group">
        <input
          id="email"
          className="form__input"
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <label for="id" className="form__label">
          Email
        </label>
      </div>

      <div className="form__group">
        <input
          id="password"
          className="form__input"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <label for="password" className="form__label">
          Password
        </label>
      </div>

      <Link to={APP_ROUTES.FORGETPASSWORD}> Password forgot?</Link>
      <Button label="LOGIN" btnColor="primary"></Button>
    </form>
  );
};

export default Login;
