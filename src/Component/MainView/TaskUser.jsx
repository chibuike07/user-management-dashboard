import { faDotCircle, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Contexts/Context";
import { taskUsers, colors, workItems } from "../util/helpers";
import taskUserStyles from "./Styles/TaskUser.module.css";

const TaskUser = () => {
  const { _progress } = taskUserStyles;
  const [data, setData] = useState([]);
  const [taskProgress, setTaskProgress] = useState(0);
  const [, setTotalProgress] = useContext(UserContext);
  useEffect(() => {
    let timeOut = window.setInterval(() => {
      taskUsers.forEach((value, i) => {
        if (value?.progress !== 100) {
          value.progress += 10;
          setTaskProgress((prev) => prev + 10);
          return taskUsers.splice(i, 1, value);
        } else {
          return (value.progress = 100);
        }
      });
    }, 10000);

    const fetchData = () => {
      setData(() => taskUsers);
    };

    fetchData();
    const handleTotalProgress = () => {
      let totalProgress =
        data?.length &&
        data.reduce((store, curVal) => store + curVal?.progress, 0);
      setTotalProgress((data) => ({ ...data, totalProgress }));
    };

    handleTotalProgress();
    return () => {
      clearInterval(timeOut);
    };
  }, [taskProgress, data, setTotalProgress]);
  return (
    <figure className="mt-3 w-100" style={{ minWidth: 220 }}>
      {data?.length &&
        data.map(({ name, role, image, progress, start, end }, idx) => {
          let date = new Date(start).getDate();
          let endDate = new Date(end).getDate();
          const randomColors = Math.floor(Math.random() * colors.length);
          const randomItems = Math.floor(Math.random() * workItems.length);

          return (
            <div
              className="w-100 d-flex"
              style={{ backgroundColor: "yell" }}
              key={idx}
            >
              <div
                className="card w-25 mb-2 justify-content-center"
                style={{ height: "10vh", borderRadius: "15px" }}
              >
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <div className="me-2">
                      <img
                        src={image}
                        alt="task user"
                        width={30}
                        className="img-fluid"
                        style={{ objectFit: "contain", borderRadius: "50%" }}
                      />
                    </div>
                    <div>
                      <span className="text-capitalize">{name}</span>
                      <br />
                      <span style={{ opacity: 0.5, color: "#ccc" }}>
                        {role}
                      </span>
                    </div>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faEllipsisV} />
                  </div>
                </div>
              </div>
              <div
                className={` ${_progress} d-flex justify-content-between align-items-center`}
                style={{
                  width: `${date !== 1 ? 5 * endDate : 5 * endDate}%`,
                  backgroundColor: colors[randomColors]["secondary"],
                  transform: `translate(${date === 1 ? 0 : 5 * date}%)`,
                }}
              >
                <div
                  className={`d-flex align-items-center`}
                  style={{
                    width: `${progress}%`,
                    backgroundColor: colors[randomColors]["primary"],
                  }}
                >
                  <FontAwesomeIcon
                    icon={faDotCircle}
                    size="sm"
                    className="me-3"
                    color="#fff"
                  />
                  <span className="text-capitalize" style={{ color: "#fff" }}>
                    {workItems[randomItems]}
                  </span>
                </div>
                <span
                  className="p-3"
                  style={{ color: colors[randomColors]["primary"] }}
                >
                  {progress}%
                </span>
              </div>
            </div>
          );
        })}
    </figure>
  );
};

export default TaskUser;
