import React, { useState } from "react";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__group">
          <input
            type="email"
            className="form__input"
            name="email"
            placeholder="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
      </form>
    </div>
  );
};

export default ForgetPassword;
