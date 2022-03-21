import React from "react";
import MainView from "../Component/MainView";
import SideBar from "../Component/SideBar";

const Views = () => {
  return (
    <div className="d-flex ">
      <SideBar />
      <MainView />
    </div>
  );
};

export default Views;
