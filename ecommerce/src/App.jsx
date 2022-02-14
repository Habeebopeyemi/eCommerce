import React, { Component, lazy, Suspense } from "react";
import { Navbar } from "./Navbar";
import CustomersList from "./CustomersList";
import Login from "./login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const ShoppingCart = lazy(() => import("./ShoppingCart"));

export default class App extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Routes>
            <Route path="/" element={<ShoppingCart />} />
            <Route path="/CustomersList" element={<CustomersList />} />
            <Route path="/Login" element={<Login />} />
            <Route path="*" element={<div>No Page Found...</div>} />
          </Routes>
        </Suspense>
      </Router>
    );
  }
}
