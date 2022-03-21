import React, { useEffect, useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { taskUsers } from "../util/helpers";
import { useSearchParams } from "react-router-dom";

const AppBar = () => {
  const [params] = useSearchParams();
  let totalProgress = params.get("totalProgress");

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    // let totalProgress =
    //   taskUsers &&
    //   taskUsers.reduce((store, curValue) => store + curValue?.progress, 0);
    setProgress(totalProgress);
  }, [totalProgress]);

  return (
    <nav className="mt-5 container-fluid d-flex justify-content-between">
      <div>
        <h2>GSE Banking app</h2>
        <p>
          <span>{(progress * taskUsers?.length) / 100}</span>{" "}
          <progress
            value={(progress * taskUsers?.length) / 100}
            max={100}
          ></progress>
        </p>
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
