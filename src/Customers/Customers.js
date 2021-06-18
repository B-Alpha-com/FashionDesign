import React, { Component } from "react";
import { Login } from "./Login";

class Customer extends Component {
  render() {
    return (
      <div className="customerPage">
        <Login />
      </div>
    );
  }
}

export default Customer;
