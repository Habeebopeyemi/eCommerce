import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-section mx-1 p-2">
      <div className="border-bottom article-container">
        <article className="mb-2 next-design">
          <h4 className="mb-3">
            Next Design
          </h4>
          <p className="footer-text text-start">
            The copy warned the little blind text, that where it came from it
            would have been rewritten a thousand times
          </p>
          <div className="d-flex justify-content-start">
            <span className="p-1">fb-icon</span>
            <span className="p-1">tw-icon</span>
            <span className="p-1">in-icon</span>
          </div>
        </article>
        <article>
          <h4>Company</h4>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link-text">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link-text">
                Term of Use
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link-text">
                Privacy Policy
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link-text">
                How it works
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link-text">
                Contact Us
              </Link>
            </li>
          </ul>
        </article>
        <article>
          <h4>Get Help</h4>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link-text">
                Support Career
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link-text">
                24h Service
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link-text">
                Quick Chat
              </Link>
            </li>
          </ul>
        </article>
        <article>
          <h4>Support</h4>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link-text">
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link-text">
                Policy
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link-text">
                Business
              </Link>
            </li>
          </ul>
        </article>
        <article>
          <h4>Contact</h4>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link-text">
                WhatsApp
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link-text">
                Support 24h
              </Link>
            </li>
          </ul>
        </article>
      </div>
      <div className="d-flex justify-content-between p-1">
        <span>
          Copyright 2022: 
          <a href="http://www.github.com/habeebopeyemi"> Deveeb</a>
        </span>
        <span>Coded by Deveeb</span>
      </div>
    </div>
  );
};

export default Footer;
