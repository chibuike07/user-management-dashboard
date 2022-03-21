import { faArrowLeft, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { UserContext } from "../../Contexts/Context";

const TopNav = () => {
  const [{ widthFlag }, setWidthFlag] = useContext(UserContext);
  const handleToggleView = () => {
    setWidthFlag((data) => ({ ...data, widthFlag: !widthFlag }));
  };

  return (
    <header
      className="container-fluid w-100  d-flex justify-content-between align-items-center"
      style={{
        backgroundColor: "#fff",
        height: "10vh",
      }}
    >
      <div className="d-flex align-items-center">
        <div
          className="bg-primary p-2 me-4 d-flex align-items-center"
          style={{ height: 30, borderRadius: "50%" }}
        >
          <FontAwesomeIcon icon={faDatabase} size="sm" color="#fff" />
        </div>
        <div>
          <strong className="text-uppercase">pj</strong>
        </div>
      </div>

      <div>
        <FontAwesomeIcon
          icon={faArrowLeft}
          onClick={() => handleToggleView()}
          cursor="pointer"
        />
      </div>
    </header>
  );
};

export default TopNav;
