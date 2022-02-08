import React, { Component } from "react";
import { Navbar } from "./Navbar";
import MainContent from "./CustomersList";
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <MainContent />
      </React.Fragment>
    );
  }
}
