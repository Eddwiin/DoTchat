import React from "react";
// import Button from "@/components/shared/button";
import "@scss/components/shared/form.scss";

const INITIAL_STATE = {
  email: "",
  password: ""
};
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="form__group">
          <input
            id="email"
            className="form__input"
            name="email"
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
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
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <label for="password" className="form__label">
            Password
          </label>
        </div>

        {/* <Button label="LOGIN" btnColor="primary"></Button> */}
      </form>
    );
  }
}
