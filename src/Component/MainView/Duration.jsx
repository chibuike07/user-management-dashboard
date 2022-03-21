import {
  faAngleLeft,
  faAngleRight,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { duration } from "../util/helpers";

const Duration = () => {
  return (
    <div
      className="container-fluid d-flex w-100 justify-content-between align-items-center"
      style={{ height: "10vh" }}
    >
      <div className="d-flex align-items-center">
        <strong className="me-4">February 2021</strong>
        <div style={{ opacity: 0.5 }}>
          <FontAwesomeIcon icon={faAngleLeft} className="me-3" color="#ccc" />
          <FontAwesomeIcon icon={faAngleRight} color="#ccc" />
        </div>
      </div>
      <div
        className="d-flex w-25 justify-content-around align-items-center"
        style={{ height: "8vh" }}
      >
        <FontAwesomeIcon icon={faSearch} size="sm" />

        <select
          name="month"
          id="month"
          className="form-select w-75 text-capitalize"
          style={{ borderRadius: "20px" }}
        >
          {duration?.length &&
            duration.map((value, idx) => (
              <option key={idx} value={value}>
                {value}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default Duration;
