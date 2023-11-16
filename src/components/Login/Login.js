import React from "react";
import "./login.css";
const LoginComp = ({ handleSubmit, loginText }) => {
  return (
    <>
      <div className="main">
        <div className="login-container">
          <div className="header">
            <h2 className="h2">{loginText}</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              id="username"
              required
              minLength={3}
            />
            <input
              type="password"
              placeholder="Password"
              id="password"
              required
              minLength={5}
            />
            <button type="submit">{loginText}</button>
          </form>
          <p>Already have an account? {loginText}</p>
        </div>
      </div>
    </>
  );
};

export default LoginComp;
