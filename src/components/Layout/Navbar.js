import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="d-flex flex-wrap justify-content-between align-items-center py-3 mx-md-5 px-lg-5 m-4 mx-sm-5">
      <Link to="#" className="me-5">
        <img src={logo} alt="logo" />
      </Link>
      <button className="btn btn-outline-success">
        Go to Market <FaAngleDoubleRight />
      </button>
    </div>
  );
};

export default Navbar;
