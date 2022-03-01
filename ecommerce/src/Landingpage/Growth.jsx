import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faGear,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

const GrowthSection = () => {
  return (
    <div className="mx-1 p-2">
      <h4 className="text-center growth-header">
        How can we help your business?
      </h4>
      <p className="text-center growth-paragraph">
        When you resell besnik, you build trust and increase
      </p>
      <div className="growth-card-wrapper d-md-flex">
        <div className="growth-card d-flex flex-column justify-content-center text-center p-2 growth-card mb-3 m-md-2">
          <picture className="growth-picture mx-auto my-2 growth-picture-purple">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </picture>
          <h4>Find out what you need</h4>
          <p className="growth-paragraph">
            We present you a proposal and discuss nitty-gritty like
          </p>
        </div>
        <div className="growth-card d-flex flex-column justify-content-center text-center p-2 growth-card mb-3 m-md-2">
          <picture className="growth-picture mx-auto my-2 growth-picture-red">
            <FontAwesomeIcon icon={faGear} />
          </picture>
          <h4>Work out the details</h4>
          <p className="growth-paragraph">
            Communication protocols apart from engagement models
          </p>
        </div>
        <div className="growth-card d-flex flex-column justify-content-center text-center p-2 growth-card mb-3 m-md-2">
          <picture className="growth-picture mx-auto my-2 growth-picture-yellow">
            <FontAwesomeIcon icon={faRocket} />
          </picture>
          <h4>We get to work fast</h4>
          <p className="growth-paragraph">
            Protocols apart from engagement models, price billing made easy
          </p>
        </div>
      </div>
    </div>
  );
};

export default GrowthSection;
