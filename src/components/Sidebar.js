import React from "react";
import { Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <h2>Hello this is sidebar</h2>
      <Outlet />
    </div>
  );
};

export default Sidebar;
