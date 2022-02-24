import React, { Component } from "react";
import {Link} from "react-router-dom"
export class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className=" navbar navbar-expand-lg navbar-dark bg-dark navbar_style">
          <div className="container-fluid">
            <a className="navbar-brand nav-brand" href="/#">
              EKOmmerce
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end "
              id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link-text">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/ShoppingCart" className="nav-link-text">
                    Cart
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/CustomersList" className="nav-link-text">
                    Customers
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="btn bg-success p-1">
                    <Link to="/Login" className="nav-link-text nav-button-text">
                      Sign in
                    </Link>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
