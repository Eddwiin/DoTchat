import React, { lazy } from "react";
import authLogo from "./../../assets/images/auth-logo.png";
import { Container, Col, Row, Image, Card } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import { INITIAL_AUTH_ROUTES } from "./../../utils/configs/route.config";

const LoginComponent = lazy(() => import("./login"));
const RegistrationComponent = lazy(() => import("./registration"));
const ForgotPasswordComponent = lazy(() => import("./forgot-password"));
const ResetPasswordComponent = lazy(() => import("./reset-password"));
const Error404Compoennt = lazy(() => import("./../share/error-404"));

const INITIAL_STATE = {
  messageConfig: {
    message: "",
    type: ""
  }
};

const cardSignIn = {
  border: "0",
  borderRadius: "1rem",
  boxShadow: "0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1)",
  marginBottom: "2rem",
  width: "50%",
  padding: "2rem"
};

export default class AuthContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  loadRoutes() {
    return (
      <Switch>
        <Route
          exact
          path={INITIAL_AUTH_ROUTES.SIGNIN}
          render={props => <LoginComponent {...props} />}
        ></Route>
        <Route
          exact
          path={INITIAL_AUTH_ROUTES.SIGNUP}
          render={props => (
            <RegistrationComponent
              {...props}
              loadMessage={this.loadMessage.bind(this)}
            />
          )}
        ></Route>
        <Route
          exact
          path={INITIAL_AUTH_ROUTES.FORGOTPASSWORD}
          render={props => (
            <ForgotPasswordComponent
              loadMessage={this.loadMessage.bind(this)}
            />
          )}
        ></Route>
        <Route
          exact
          path={INITIAL_AUTH_ROUTES.RESETPASSWORD}
          render={props => (
            <ResetPasswordComponent
              {...props}
              loadMessage={this.loadMessage.bind(this)}
            />
          )}
        ></Route>
        <Route component={Error404Compoennt}></Route>
      </Switch>
    );
  }

  loadMessage({ message, err, type }) {
    if (err) console.error(err);

    this.setState({
      messageConfig: {
        message: message,
        type: type
      }
    });
  }

  render() {
    return (
      <Container>
        <Col md={{ offset: 3 }}>
          <Card style={cardSignIn} className="my-5">
            <Card.Body>
              <Row>
                <Col
                  xs={{ span: 8, offset: 8 }}
                  md={{ span: 6, offset: 5 }}
                  className="pb-4"
                >
                  <Image
                    src={authLogo}
                    className="w-25"
                    alt="logo"
                    roundedCircle
                  />
                </Col>
              </Row>

              {this.state.messageConfig.message && (
                <div
                  className={"alert alert-" + this.state.messageConfig.type}
                  role="alert"
                >
                  {this.state.messageConfig.message}
                </div>
              )}

              {this.loadRoutes()}
            </Card.Body>
          </Card>
        </Col>
      </Container>
    );
  }
}
