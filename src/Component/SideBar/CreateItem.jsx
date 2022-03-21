import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CreateItem = () => {
  return (
    <div className="container-fluid w-100 mt-5 ">
      <div
        className=" d-flex p-2 justify-content-between align-items-center"
        style={{
          backgroundColor: "#ccc",
          width: "90%",
          height: 70,
          borderRadius: "20px",
        }}
      >
        <div className="p-1">
          <span>
            create <br /> new task
          </span>
        </div>
        <div>
          <FontAwesomeIcon icon={faPlusCircle} color="#0d6efd" size="2x" />
        </div>
      </div>
    </div>
  );
};

export default CreateItem;
