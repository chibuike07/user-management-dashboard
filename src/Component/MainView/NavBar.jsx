import { faChrome } from "@fortawesome/free-brands-svg-icons";
import {
  faBell,
  faCommenting,
  faDotCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { UserContext } from "../../Contexts/Context";
import { users } from "../util/helpers";

const NavBar = () => {
  const [{ tag }] = useContext(UserContext);
  return (
    <nav
      className="container d-flex justify-content-between"
      style={{ height: "10vh" }}
    >
      <div className="d-flex align-items-center p-2">
        <div>
          <strong className="text-capitalize">{tag ? tag : "dashboard"}</strong>
          <span style={{ opacity: 0.3 }}>{" > "} OSE Banking App</span>
        </div>
      </div>

      <div
        className="d-flex justify-content-around align-items-center"
        style={{ width: "30%" }}
      >
        <div
          style={{
            backgroundColor: "",
            width: "30%",
            borderRight: "1px solid #ccc",
          }}
        >
          <FontAwesomeIcon icon={faCommenting} className="me-4" size="1x" />
          <FontAwesomeIcon icon={faBell} />
          <FontAwesomeIcon
            icon={faDotCircle}
            color="#ff0000"
            size="sm"
            style={{ transform: "translate(-50%, -30%)" }}
          />
        </div>
        <div className="d-flex justify-content-around w-50 align-items-center">
          <FontAwesomeIcon icon={faChrome} className="me-4" size="2x" />

          <select id="users" className="form-select text-capitalize">
            {users?.length &&
              users.map((value, idx) => (
                <option key={idx} value={value} className="text-capitalize">
                  {value}
                </option>
              ))}
          </select>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
