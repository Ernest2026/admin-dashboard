import React from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";
import logo from "../assets/logo.png";
import notfound from "../assets/404.png";

const NoPage = () => {
  return (
    <>
      <section className="p-3">
        <div className="d-flex flex-wrap justify-content-around align-items-center">
          <img src={logo} alt="logo" />
          <div>
            <button type="button" className="btn btn-outline-success mx-3">
              Login
            </button>
            <button type="button" className="btn btn-success">
              Sign up
            </button>
          </div>
        </div>
      </section>

      <section className="text-center">
        <img src={notfound} alt="404" className="img-404 mb-5" />
        <h1 className="text-success">
          <strong>Error 404! Page Not Found</strong>
        </h1>
        <p>Oh dear! Sorry,we couldn't find that page!</p>
        <button type="button" className="btn btn-outline-success mt-3">
          <FaAngleDoubleLeft /> Go Back
        </button>
      </section>
    </>
  );
};

export default NoPage;
