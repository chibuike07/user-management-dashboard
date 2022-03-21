import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { UserContext } from "../../Contexts/Context";
import CreateItem from "./CreateItem";
import ListItems from "./ListItems";
import TopNav from "./TopNav";
import UserInfo from "./UserInfo";

const SideBar = () => {
  const [{ widthFlag }, setWidthFlag] = useContext(UserContext);

  const handleShowSideBar = () => {
    setWidthFlag((data) => ({ ...data, widthFlag: true }));
  };

  return (
    <>
      {!widthFlag && (
        <div className="position-absolute" style={{ top: "3%", left: "3%" }}>
          <FontAwesomeIcon
            icon={faArrowRight}
            cursor="pointer"
            onClick={() => handleShowSideBar()}
          />
        </div>
      )}
      {widthFlag && (
        <aside
          style={{
            minWidth: `${widthFlag ? 220 : 0}px`,
            height: "inherit",
          }}
        >
          <TopNav />
          <ListItems />
          <CreateItem />
          <UserInfo />
        </aside>
      )}
    </>
  );
};

export default SideBar;
