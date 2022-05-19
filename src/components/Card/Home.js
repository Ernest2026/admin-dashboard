import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const HomeCard = ({ text, count, component }) => {
  return (
    <div
      className="card border-0 home-card col-xl-3 col-sm-6 col-12 rounded-1 overflow-hidden"
      style={{
        position: "relative",
      }}
    >
      <div className="p-3 text-light">
        <h1>
          <b>{count}</b>
        </h1>
        <h6 className="m-0" style={{ textTransform: "uppercase" }}>
          {text}
        </h6>
      </div>
      <span
        style={{
          position: "absolute",
          right: "1rem",
          top: "1rem",
          fontSize: "50px",
          color: "hsl(0deg 0% 0% / 30%)",
        }}
      >
        {component}
      </span>
      <Link to="#" className="d-flex px-2 link-div">
        <p className="mx-auto my-2 text-light">
          <small>
            See details
            <FaArrowRight className="ms-2" />
          </small>
        </p>
      </Link>
    </div>
  );
};

export default HomeCard;
