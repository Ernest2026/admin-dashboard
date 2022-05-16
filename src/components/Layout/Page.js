import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Page = () => {
  return (
    <>
      <div className="d-flex flex-row">
        <div className=" col-lg-2">
          <Sidebar />
        </div>
        <div className="col-lg-9">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Page;
