import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { FaArrowLeft, FaTable, FaTh } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const url = useLocation().pathname;
  const [location, setLocation] = useState(url);
  useEffect(() => {
    setLocation(url);
  }, [url]);
  return (
    <div className="sidebar" style={{ height: "100vh", position: "relative" }}>
      <div className="px-3 py-4">
        <img src={logo} alt="Logo" width="150px" />
      </div>
      <Link to="/">
        <div
          className={`text-light ps-4 py-3 d-flex align-items-center div-link ${
            location === "/" && "border-start border-3"
          }`}
        >
          <FaTh />
          <span className="ps-3">Dashboard</span>
        </div>
      </Link>
      <Link to="/product">
        <div
          className={`text-light ps-4 py-3 d-flex align-items-center div-link ${
            location === "/product" && "border-start border-3"
          }`}
        >
          <FaTable />
          <span className="ps-3">Product</span>
        </div>
      </Link>
      <Link
        to="/logout"
        style={{ position: "absolute", bottom: 0, right: 0, width: "100%" }}
      >
        <div
          className={`text-light ps-4 py-3 d-flex align-items-center div-link ${
            location === "/logout" && "border-start border-3"
          }`}
        >
          <FaArrowLeft />
          <span className="ps-3">Log out</span>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
