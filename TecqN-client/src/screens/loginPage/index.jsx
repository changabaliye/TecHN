import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
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
                <input
                  className="Btn-box"
                  onClick={() => navigate("/home")}
                  type="submit"
                  value="Login"
                  href="#"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
