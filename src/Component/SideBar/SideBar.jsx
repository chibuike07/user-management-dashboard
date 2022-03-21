import React from "react";
import CreateItem from "./CreateItem";
import ListItems from "./ListItems";
import TopNav from "./TopNav";
import UserInfo from "./UserInfo";

const SideBar = () => {
  return (
    <aside
      style={{
        width: "17%",
        minWidth: 250,
        height: "inherit",
        // backgroundColor: "#f8f9fa",
      }}
    >
      <TopNav />
      <ListItems />
      <CreateItem />
      <UserInfo />
    </aside>
  );
};

export default SideBar;
