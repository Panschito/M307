import React from "react";

import withRouter from "./withRouter";

//Klassenkonstruktor
class Authenticate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  //zuweisung des inputs
  onValueChange(ev) {
    console.log(ev);
    const { id, value } = ev.target;

    this.setState({ [id]: value });
  }
  //input zu anfrage
  async onSubmit() {
    console.log(this.props);

    await fetch(
      "https://campus.csbe.ch/sollberger-manuel/uek307/Authenticate",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "post",
        body: JSON.stringify(this.state),
      }
    );
  }
  //renderen des formulars
  render() {
    const { name, password } = this.state;

    return (
      <form>
        <label>
          Enter your Name:
          <input
            id="username"
            type="text"
            value={name}
            onChange={this.onValueChange}
          />
        </label>
        <label>
          Password
          <input
            id="password"
            type="password"
            value={password}
            onChange={this.onValueChange}
          />
        </label>
        <div className="btn btn-primary" onClick={this.onSubmit}>
          Submit
        </div>
      </form>
    );
  }
}

export default withRouter(Authenticate);
