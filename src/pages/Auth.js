import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar_1.png";

const Auth = () => {
  return (
    <>
      <div className="d-flex flex-wrap justify-content-between align-items-center p-5 mb-5">
        <a href="*">
          <img src={logo} alt="logo" />
        </a>
        <button className="btn btn-outline-success">
          Goto Market <FaAngleDoubleRight />
        </button>
      </div>

      <section className="px-5">
        <div className="row g-5 align-items-center">
          <div className="col-md-6 col-sm-12">
            <h1 className="text-success head mb-3">
              <strong>
                Login to your <br /> Dashboard
              </strong>
            </h1>
            <p className="mb-5">
              <strong>Welcome back Admin !!!</strong>
            </p>
            <div>
              <div className="form-floating">
                <input
                  type="email"
                  id="floatingInput"
                  className="form-control mb-3"
                  placeholder="Email"
                />
                <label htmlFor="floatingInput">Email</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  id="floatingInput"
                  className="form-control mb-3"
                  placeholder="Password"
                />
                <label htmlFor="floatingInput">Password</label>
              </div>
              <div className="d-grid gap-2 mb-4">
                <button type="button" className="btn-lg btn btn-success">
                  Log in
                </button>
              </div>
              <p className="text-center">
                Forgot password ? <a href="*">Reset here</a>
              </p>
            </div>
          </div>

          <div className="col-md-6 col-sm-12">
            <img src={avatar} alt="avatar" className="w-75 avatar" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Auth;
