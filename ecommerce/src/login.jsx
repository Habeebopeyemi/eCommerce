import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    // initializing the state
    this.state = {
      email: "",
      password: "",
        message: "",
      placeholder:"user@gmail.com"
    };
    this.getUsernameHandler = event => {
      this.setState({
        email: event.target.value,
      });
    };
    this.getPasswordHandler = event => {
      this.setState({
        password: event.target.value,
      });
    };
    this.onLoginClicked = () => {
      if (this.state.email === "admin@gmail.com") {
        if (this.state.password === "admin") {
          this.setState({
            message: (
              <span className="text-success">Successfully logged in</span>
            ),
          });
        } else {
          this.setState({
            message: (
              <span className="text-danger">
                Incorrect username or password
              </span>
            ),
          });
        }
      } else {
        this.setState({
          message: (
            <span className="text-danger">Incorrect username or password</span>
          ),
        });
      }
    };
  }
  render() {
    return (
      <div className="col-lg-6 p-3">
        <h4 className="m-1 p-2 border-bottom">Login</h4>
        {/* Email starts here */}
        <div className="form-group form-row">
          <label className="col-lg-4 ">Email</label>
          <input
            type="text"
            className="form-control"
            placeholder={this.state.placeholder}
                    onChange={this.getUsernameHandler}
          />
        </div>
        {/* Email ends here */}
        {/* password starts here */}
        <div className="form-group form-row">
          <label className="col-lg-4 ">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder={this.state.password}
            onChange={this.getPasswordHandler}
          />
        </div>
        {/* password ends here */}
        <div className="text-start m-2">
          <span className="m-1">{this.state.message}</span>
          <button className="btn btn-primary m-1" onClick={this.onLoginClicked}>
            Login
          </button>
        </div>
      </div>
    );
  }
}
