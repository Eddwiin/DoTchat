import React, { useState } from "react";
import { ToastsStore } from "react-toasts";
import API from "@/utils/api";
import APP_ROUTES from "../../utils/route-config";
import { Link } from "react-router-dom";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");
  const [rPassword, setRPassword] = useState("");

  const handleSubmit = event => {
    event.preventDefault();

    if (password !== rPassword)
      return ToastsStore.error("Passwords are not the same");

    const user = {
      email: email,
      pseudo: pseudo,
      password: password,
      rPassword: rPassword
    };

    API.post(`/auth/saveUser`, user)
      .then(res => {
        if (res.data.isUserExist) {
          return ToastsStore.error("Account already exist in database");
        }

        return ToastsStore.success("Account has been created !");
      })
      .catch(err => {
        console.error(err);
        ToastsStore.error("Failed !");
      });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__group">
        <input
          id="email"
          className="form__input"
          type="email"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="email" className="form__label">
          Email
        </label>
      </div>

      <div className="form__group">
        <input
          id="pseudo"
          className="form__input"
          type="text"
          name="pseudo"
          placeholder="Pseudo"
          pattern="[0-9a-zA-Z]{3,}"
          required
          value={pseudo}
          onChange={e => setPseudo(e.target.value)}
        />
        <label htmlFor="pseudo" className="form__label">
          Pseudo
        </label>
      </div>

      <div className="form__group">
        <input
          id="password"
          className="form__input"
          type="password"
          name="password"
          placeholder="Password"
          pattern="[0-9a-zA-Z]{10,}"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <label htmlFor="password" className="form__label">
          Password
        </label>
      </div>

      <div className="form__group">
        <input
          id="rPassword"
          className="form__input"
          type="password"
          name="password"
          placeholder="Re-type password"
          required
          pattern="[0-9a-zA-Z]{10,}"
          value={rPassword}
          onChange={e => setRPassword(e.target.value)}
        />
        <label htmlFor="rPassword" className="form__label">
          Re-type Password
        </label>
      </div>

      <div className="block">
        <Link to={APP_ROUTES.SIGNUP}>
          <span className="link "> Sign in?</span>
        </Link>
      </div>

      <div className="block">
        <Link to={APP_ROUTES.FORGETPASSWORD}>
          <span className="link ">Password forgot?</span>
        </Link>
      </div>

      <input type="submit" value="Sign up" />
    </form>
  );
};

export default Registration;
