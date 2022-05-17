import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Render = () => {
  const [activeSidebar, setActiveSidebar] = useState(false);
  return (
    <>
      <div className="d-flex flex-row" style={{ overflowX: "hidden" }}>
        <div
          className={`sidenav ${
            activeSidebar ? "" : "col-2"
          } d-sm-block col-sm-3 col-lg-2`}
        >
          <Sidebar toChild={activeSidebar} sendToParent={setActiveSidebar} />
        </div>
        <div
          className="col-10 col-sm-9 col-lg-10 p-3 outlet"
          style={{ maxHeight: "100vh", overflowY: "scroll" }}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Render;
