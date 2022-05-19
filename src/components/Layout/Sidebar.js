import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import {
  FaArrowLeft,
  FaRegWindowClose,
  FaTable,
  FaTh,
  FaThLarge,
  FaUserFriends,
  FaUsers,
} from "react-icons/fa";
import avatar from "../../assets/avatar.jpg";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ sendToParent, toChild }) => {
  const url = useLocation().pathname;
  const [location, setLocation] = useState(url);
  const [navActive, setNavActive] = useState(toChild);
  useEffect(() => {
    setLocation(url);
  }, [url]);
  const handleClick = () => {
    setNavActive(!navActive);
    sendToParent(!navActive);
  };
  return (
    <div className="sidebar sidenav">
      <div
        className={`px-3  ${
          navActive
            ? "px-3 justify-content-between"
            : "justify-content-center justify-content-sm-start"
        } ps-sm-3 py-4 d-flex`}
      >
        <img
          src={logo}
          alt="Logo"
          className={`logo pe-3 me-auto ${!navActive && "d-none d-sm-block"}`}
        />

        <span
          className="text-white d-sm-none"
          style={{ fontSize: "20px" }}
          onClick={handleClick}
        >
          {navActive ? <FaRegWindowClose /> : <FaTh />}
        </span>
      </div>
      <div
        className={`text-light ${
          navActive ? "ps-3" : "justify-content-center justify-content-sm-start"
        } ps-sm-3 pt-2 pb-4 d-flex align-items-center`}
      >
        <div
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <img src={avatar} alt="You" width="100%" />
        </div>
        <div className={`ps-3 ${!navActive && "d-none d-sm-block"}`}>
          <p className="m-0" style={{ fontSize: "15px" }}>
            <small>Joachim Dawns</small>
          </p>
          <p className="m-0" style={{ fontSize: "12px" }}>
            <small>Administrator</small>
          </p>
        </div>
      </div>
      <Link to="/">
        <div
          className={`text-light ${
            navActive
              ? "ps-3"
              : "justify-content-center justify-content-sm-start"
          } ps-sm-3 py-3 d-flex align-items-center div-link ${
            location === "/" && "border-start border-3"
          }`}
        >
          <FaThLarge />
          <span className={`ps-3 ${!navActive && "d-none d-sm-block"}`}>
            Dashboard
          </span>
        </div>
      </Link>
      <Link to="/product">
        <div
          className={`text-light ${
            navActive
              ? "ps-3"
              : "justify-content-center justify-content-sm-start"
          } ps-sm-3 py-3 d-flex align-items-center div-link ${
            location === "/product" && "border-start border-3"
          }`}
        >
          <FaTable />
          <span className={`ps-3 ${!navActive && "d-none d-sm-block"}`}>
            Product
          </span>
        </div>
      </Link>
      <Link to="/client">
        <div
          className={`text-light ${
            navActive
              ? "ps-3"
              : "justify-content-center justify-content-sm-start"
          } ps-sm-3 py-3 d-flex align-items-center div-link ${
            location === "/client" && "border-start border-3"
          }`}
        >
          <FaUsers />
          <span className={`ps-3 ${!navActive && "d-none d-sm-block"}`}>
            Clients
          </span>
        </div>
      </Link>
      <Link to="/team">
        <div
          className={`text-light ${
            navActive
              ? "ps-3"
              : "justify-content-center justify-content-sm-start"
          } ps-sm-3 py-3 d-flex align-items-center div-link ${
            location === "/team" && "border-start border-3"
          }`}
        >
          <FaUserFriends />
          <span className={`ps-3 ${!navActive && "d-none d-sm-block"}`}>
            Teams
          </span>
        </div>
      </Link>
      <Link to="/logout">
        <div
          className={`text-light ${
            navActive
              ? "ps-3"
              : "justify-content-center justify-content-sm-start"
          } ps-sm-3 py-3 d-flex align-items-center div-link ${
            location === "/logout" && "border-start border-3"
          }`}
        >
          <FaArrowLeft />
          <span className={`ps-3 ${!navActive && "d-none d-sm-block"}`}>
            Log out
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
