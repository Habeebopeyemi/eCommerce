import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartColumn } from "@fortawesome/free-solid-svg-icons";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
const PurposeSection = () => {
  return (
    <div className="purpose-wrapper purpose-section mx-1 p-2 d-sm-flex flex-wrap d-md-flex my-lg-2">
      <article className="p-md-2 mx-md-2">
        <h4 className="purpose-header-text">ACHIEVE MORE</h4>
        <blockquote className="purpose-blockquote">
          Purpose of a convoy is to keep your team
        </blockquote>
      </article>
      <div className="d-sm-flex purpose-grid">
        <div className="purpose-grid-card p-2">
          <picture className="purpose-picture-area purpose-picture-purple">
            <FontAwesomeIcon icon={faChartColumn} />
          </picture>
          <h4 className="purpose-header-area">Built for impact</h4>
          <p className="purpose-paragraph-area">
            We identify and nurture a truly diverse products, that showcase our
            ways of life, culture and tradition.
          </p>
        </div>
        <div className="purpose-grid-card p-2">
          <picture className="purpose-picture-area purpose-picture-red">
            <FontAwesomeIcon icon={faRotate} />
          </picture>
          <h4 className="purpose-header-area">In sync with you</h4>
          <p className="purpose-paragraph-area">
            We work the way you do by adapting to your need and rythm, we aim to
            blend in for seamless trade that suits your lifestyle.
          </p>
        </div>
      </div>
    </div>
  );
};
export default PurposeSection
