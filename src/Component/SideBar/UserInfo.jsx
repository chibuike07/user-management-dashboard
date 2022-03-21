import React from "react";
import Guy from "../../Assests/guy.jpg";
const UserInfo = () => {
  return (
    <div
      className="container-fluid position-absolute"
      style={{ bottom: "-60%" }}
    >
      <div className="d-flex ">
        <div className="me-2" style={{ backgroundColor: "" }}>
          <img
            src={Guy}
            alt="user"
            width={30}
            style={{ objectFit: "", borderRadius: "50%", height: 40 }}
          />
        </div>
        <div>
          <span className="text-capitalize">
            <strong>finna a</strong>
          </span>
          <address>
            <em style={{ opacity: 0.5 }}>finna@gmail.com</em>
          </address>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
