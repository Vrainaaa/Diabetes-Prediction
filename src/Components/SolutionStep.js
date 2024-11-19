import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";

function DiabetesTypeStep(props) {
  return (
    <div className="diabetes-text-step">
      <p className="diabetes-text-sTitle">
        <span>
          <FontAwesomeIcon className="fa-icon" icon={faCircleChevronDown} />{" "}
          {props.title}
        </span>
      </p>
      <p className="diabetes-text-description">{props.description}</p>
    </div>
  );
}

export default DiabetesTypeStep;
