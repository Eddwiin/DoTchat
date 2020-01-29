import React from "react";
import Button from "@/components/shared/button";

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
      <form onSubmit={this.handleSubmit}>
        <label>Email</label>
        <input
          name="email"
          type="email"
          value={this.state.email}
          onChange={this.handleChange}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />

        <Button label="LOGIN" btnColor="primary"></Button>
      </form>
    );
  }
}
