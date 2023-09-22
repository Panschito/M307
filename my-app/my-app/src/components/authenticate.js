import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";

export class Authenticate extends React.Component() {
  render() {
    const [name, password, setName, setPassword] = useState("");

    return (
      <form>
        <label>
          Enter your Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <lable>
          Password
          <input
            type="passeord"
            value={password}
            onChange={(p) => setPassword(p.target.value)}
          />
        </lable>
      </form>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Authenticate />);
