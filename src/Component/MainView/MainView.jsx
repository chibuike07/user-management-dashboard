import React from "react";
import AppBar from "./AppBar";
import Duration from "./Duration";
import ListMonth from "./ListMonth";
import NavBar from "./NavBar";
import TaskUser from "./TaskUser";

const MainView = () => {
  return (
    <main className="container-fluid">
      <NavBar />
      <AppBar />
      <Duration />
      <ListMonth />
      <div style={{ overFlow: "auto" }}>
        <TaskUser />
      </div>
    </main>
  );
};

export default MainView;
