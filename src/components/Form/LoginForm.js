import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <>
      <h1 className="text-success head mb-3">
        <strong>
          Login to your <br /> Dashboard
        </strong>
      </h1>
      <p className="mb-5">
        <strong>Welcome back Admin !!!</strong>
      </p>
      <div className="form-floating">
        <input
          type="email"
          id="emailInput"
          className="form-control mb-3"
          placeholder="Email"
        />
        <label htmlFor="emailInput">Email</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          id="passwordInput"
          className="form-control mb-3"
          placeholder="Password"
        />
        <label htmlFor="passwordInput">Password</label>
      </div>
      <div className="d-grid gap-2 mb-4">
        <button type="button" className="btn-lg btn btn-success">
          Log in
        </button>
      </div>
      <p className="text-center">
        Forgot password ? <Link to="#">Reset here</Link>
      </p>
    </>
  );
};

export default LoginForm;
