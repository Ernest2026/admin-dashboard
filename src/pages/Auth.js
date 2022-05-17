import React from "react";
import avatar from "../assets/Auth/avatar.png";
import Navbar from "../components/Layout/Navbar";
import LoginForm from "../components/Form/LoginForm";

const Auth = () => {
  return (
    <div className="responsive-container">
      <Navbar />
      <section className="mx-md-5 my-5 px-lg-5 m-4 m-sm-5">
        <div className="row g-0 justify-content-between align-items-center">
          <div className="col-md-5 col-sm-12">
            <LoginForm />
          </div>

          <div className="col-md-7 col-sm-12 row justify-content-end">
            <img src={avatar} alt="avatar" className="avatar" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Auth;
