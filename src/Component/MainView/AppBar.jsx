import React, { useContext } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { taskUsers } from "../util/helpers";
import { UserContext } from "../../Contexts/Context";
import styles from "./Styles/TaskUser.module.css";

const AppBar = () => {
  const { Totalprogress } = styles;
  const [{ totalProgress }] = useContext(UserContext);

  return (
    <nav className="mt-5 container-fluid d-flex justify-content-between">
      <div>
        <h2>GSE Banking app</h2>
        <div className="d-flex align-items-center">
          <span className="me-2">
            {(totalProgress * taskUsers?.length) / 100}%
          </span>{" "}
          <div className={Totalprogress}>
            <div
              style={{ width: `${(totalProgress * taskUsers?.length) / 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div
        className="d-flex align-items-center justify-content-evenly"
        style={{ width: "30%" }}
      >
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            height: "3em",
            width: "50%",
            border: "2px dashed #ccc",
            borderRadius: "15px",
          }}
        >
          <strong className="me-3">
            <FontAwesomeIcon icon={faPlus} color="#ccc" />
          </strong>
          <strong style={{ color: "#ccc" }}>invite</strong>
        </div>
        <div className="d-flex">
          {taskUsers?.length &&
            taskUsers
              .filter((v, i) => i < 3)
              .map(({ image }, idx) => (
                <div style={{ width: 15 }} key={idx}>
                  <img
                    src={image}
                    alt="user"
                    width={30}
                    style={{ objectFit: "", borderRadius: "50%", height: 30 }}
                  />
                </div>
              ))}
          <div
            className="d-flex align-items-center"
            style={{ backgroundColor: "#000", width: 30, borderRadius: "50%" }}
          >
            <span style={{ color: "#fff" }}>+15</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppBar;
