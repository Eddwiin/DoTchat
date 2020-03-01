import React, { useState } from "react";
import APP_ROUTES from "../../../utils/route-config";
import { FormGroup, LinkTo, Button } from "@/components/shared";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [rPassword, setRPassword] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
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
          placeholder="Retype your password"
          value={password}
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
    </form>

    // <form className="form" onSubmit={handleSubmit}>
    //   <div className="form__group">
    //     <input
    //       id="password"
    //       className="form__input"
    //       type="password"
    //       name="password"
    //       placeholder="Password"
    //       required
    //       value={password}
    //       onChange={e => setPassword(e.target.value)}
    //     />
    //     <label htmlFor="password" className="form__label">
    //       Password
    //     </label>
    //   </div>

    //   <div className="form__group">
    //     <input
    //       id="rPassword"
    //       className="form__input"
    //       type="password"
    //       name="rPassword"
    //       placeholder="Re-type password"
    //       required
    //       value={rPassword}
    //       onChange={e => setRPassword(e.target.value)}
    //     />
    //     <label htmlFor="rPassword" className="form__label">
    //       Re-type password
    //     </label>
    //   </div>

    //   <div className="block">
    //     <Link to={APP_ROUTES.SIGNIN}>
    //       <span className="link "> Sign in?</span>
    //     </Link>
    //   </div>

    //   <div style={btnPosition}>
    //     {/* <Button label="RESET" btnColor="primary"></Button> */}
    //   </div>
    // </form>
  );
};

export default ResetPassword;
