import React, { useState } from "react";
// import Button from "@/components/shared/button";
import API from "@/utils/api";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");
  const [rPassword, setRPassword] = useState("");

  const handleSubmit = event => {
    if (password !== rPassword) {
      console.error("Password not same");
      return;
    }

    const user = {
      email: email,
      pseudo: pseudo,
      password: password,
      rPassword: rPassword
    };

    API.post(`/auth/saveUser`, user).then(res => {
      console.log(res);
    });

    event.preventDefault();
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
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <label htmlFor="pseudo" className="form__label">
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
          value={rPassword}
          onChange={e => setRPassword(e.target.value)}
        />
        <label htmlFor="rPassword" className="form__label">
          Re-type Password
        </label>
      </div>

      <input type="submit" value="Sign up" />
      {/* <Button label="SIGN UP" btnColor="primary"></Button> */}
    </form>
  );
};

export default Registration;
