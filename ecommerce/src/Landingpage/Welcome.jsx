import React from "react";
const PageHeader = (props) => {
  return (
    <div className="welcome-wrapper d-flex flex-column mx-1 flex-sm-row align-items-center">
      <div className="welcome-content">
        <h3 className="welcome-header mb-md-4">
          Enjoy your <span className="blue-text">shopping</span> experience with
          EKOmmerce.
        </h3>
        <p className="p-1 welcome-paragraph p-lg-2">
          with EKOmmerce you get the most accurate product you want, with easy
          carting, payment and stress free service.
        </p>
        <div className="d-flex mt-md-3">
          <div>
            <input type="email" placeholder="Email address" />
          </div>
          <div>
            <button className="button">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="welcome-image mx-auto">
        <img
          className="img-fluid"
          src={props.image.src}
          alt={props.image.alt}
        />
      </div>
    </div>
  );
};

export default PageHeader;
