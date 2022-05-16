import React from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";
import notfound from "../assets/NoPage/404.png";
import Navbar from "../components/Layout/Navbar";

const NoPage = () => {
  return (
    <div className="responsive-container">
      <Navbar />
      <section className="mx-md-5 px-lg-5 m-4 mx-sm-5 text-center">
        <div className="my-5">
          <img src={notfound} alt="404" className="img-404" />
        </div>
        <h1 className="text-success">
          <strong>Error 404! Page Not Found</strong>
        </h1>
        <p>Oh dear! Sorry,we couldn't find that page!</p>
        <button type="button" className="btn btn-outline-success">
          <FaAngleDoubleLeft /> Go Back
        </button>
      </section>
    </div>
  );
};

export default NoPage;
