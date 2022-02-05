import React from "react";
import ReactDOM from "react-dom";
import "jquery";
import "@popperjs/core";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
