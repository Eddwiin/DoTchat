import React, { lazy } from "react";
import Button from "@/components/shared/button";

import "@scss/components/auth/auth-container.scss";
import APP_ROUTES from "../../utils/route-config";

const Modal = lazy(() => import("@/components/shared/modal"));
const Login = lazy(() => import("@/components/auth/login"));

export default class AuthContainer extends React.Component {
  openModal() {
    if (this.props.location.pathname === "/auth/login") {
      return (
        <Modal closeModal={this.closeModal.bind(this)}>
          <Login></Login>
        </Modal>
      );
    }
  }

  closeModal() {
    const { history } = this.props;
    history.push(APP_ROUTES.AUTH);
  }

  render() {
    return (
      <div>
        <div className="view-index">
          <div className="view-index__body">
            <h1 className="view-index__title">
              <span className="view-index__title--main">DotChat</span>
              <span className="view-index__title--sub">
                Communicate with the world
              </span>
            </h1>
            <Button label="SIGN IN" path={APP_ROUTES.LOGIN} isAnimate={true} />
          </div>
        </div>

        {this.openModal(this.props)}
      </div>
    );
  }
}
