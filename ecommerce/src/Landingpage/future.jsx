import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLayerGroup,
  faGear,
    faLightbulb,
    faChartPie,
  faCheck
} from "@fortawesome/free-solid-svg-icons";

const FutureSection = () => {
  return (
    <div className="mx-1 p-2 future-wrapper mt-md-5 mt-lg-5">
      <h4 className="future-header m-md-0">Future of support with new Shape</h4>
      <p className="future-paragraph  m-md-0">
        Discuss your goals, determine success metrics, identify problems
      </p>
      <div className=" future-scope">
        <div className="d-flex py-2">
          <picture className="future-picture">
            <FontAwesomeIcon icon={faCheck} />
          </picture>
          <span className="future-paragraph pt-1">
            UX design content strategy
          </span>
        </div>
        <div className="d-flex py-2">
          <picture className="future-picture">
            <FontAwesomeIcon icon={faCheck} />
          </picture>
          <span className="future-paragraph"> Development bring</span>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-start p-3 future-card future-card-1 my-3">
        <picture className="mb-4 future-icons future-icon-purple">
          <FontAwesomeIcon icon={faLayerGroup} />
        </picture>
        <h4 className="mb-2">Web design</h4>
        <p className="future-paragraph">
          One for all and all for one, Muskehounds are always ready.
        </p>
      </div>
      <div className="d-flex flex-column justify-content-start p-3 future-card future-card-2 my-3">
        <picture className="mb-4 future-icons future-icon-orangered">
          <FontAwesomeIcon icon={faGear} />
        </picture>
        <h4 className="mb-2">Automation</h4>
        <p className="future-paragraph">
          Little blind text should turn around and return
        </p>
      </div>
      <div className="d-flex flex-column justify-content-start p-3 future-card future-card-3 my-3">
        <picture className="mb-4 future-icons future-icon-orange">
          <FontAwesomeIcon icon={faLightbulb} />
        </picture>
        <h4 className="mb-2">Ad-creatives</h4>
        <p className="future-paragraph">
          Alphabet village and the subline of her own road.
        </p>
      </div>
      <div className="d-flex flex-column justify-content-start p-3 future-card future-card-4 my-3">
        <picture className="mb-4 future-icons future-icon-blue">
          <FontAwesomeIcon icon={faChartPie} />
        </picture>
        <h4 className="mb-2">Infographics</h4>
        <p className="future-paragraph">
          Nothing the copy said could convince her.
        </p>
      </div>
    </div>
  );
};

export default FutureSection;
