import React from "react";
import { useNavigate } from "react-router-dom";

const GetStartedBtn = props => {
  let navigate = useNavigate();
  return (
    <div className="get-started d-flex justify-content-center mx-auto p-1 my-4 my-lg-5">
      <button
        onClick={() => {
          navigate("/Login");
        }}
        className="get-started-btn py-1">
        Get Started
        <img
          className="animated-icon"
          src={props.animatedIcon.src}
          alt={props.animatedIcon.alt}
        />
      </button>
    </div>
  );
};

export default GetStartedBtn;
