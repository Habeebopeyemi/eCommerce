import React, { Component } from "react";
import { Navbar } from "./Navbar";
// import CustomersList from "./CustomersList";
import ShoppingCart from "./ShoppingCart";
// import Login from "./login";
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <ShoppingCart />
      </React.Fragment>
    );
  }
}
