import React from "react";
import "./login.css";
const LoginPage = () => {
  return (
    <div className="body">
    <div className="container">
      <div className="drop">
        <div className="content">
          <h2 className="animate__heartBeat">Login </h2>
          <form action="">
            <div className="input-box">
              <input type="email" name="username" placeholder="Email" />
            </div>
            <div className="input-box">
              <input type="password" name="password" placeholder="Password" />
            </div>
            <div className="input-box">
              <input type="submit" value="Login" href="#" />
            </div>
          </form>
        </div>
      </div>
      <a href="#" className="btn">
        Forgot Password
      </a>
      <a href="#" className="btn signup">
        Signup
      </a>
    </div>
    </div>
  );
};

export default LoginPage;
