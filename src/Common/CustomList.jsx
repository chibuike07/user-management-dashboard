import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CustomList = ({ text, icon, idx, handleItemClick }) => {
  return (
    <li
      className={`d-flex align-items-center list-group-item list-group-item-action border-0`}
      style={{ lineHeight: 3 }}
      onClick={(e) => handleItemClick(e, idx)}
    >
      <FontAwesomeIcon icon={icon} className="me-3" />
      <span
        className="text-capitalize"
        style={{ listStyle: "none", fontWeight: "normal" }}
      >
        {text}
      </span>
    </li>
  );
};

export default CustomList;
