import React from "react";
const PageHeader = () => {
  return (
    <div className="d-flex-column mx-1">
      <div className="welcome-content">
        <h3 className="welcome-header">
          Enjoy your <span className="blue-text">shopping</span> experience with EKOmmerce.
        </h3>
        <p>
          with EKOmmerce you get the most accurate product you want, with easy carting, payment and stress free
          service.
        </p>
        <div className="d-flex">
          <div>
            <input type="email" placeholder="Email address" />
          </div>
          <div>
            <button className="button">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="welcome-image">
        <img
          className="img-fluid"
          src="../../landingPageResources/taraclark.jpg"
          alt="shopping"
        />
      </div>
    </div>
  );
};

export default PageHeader;
