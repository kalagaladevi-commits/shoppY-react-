import React, { useState } from "react";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import "./UseForm.css";

const UseForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="useform-page-container">
      <div className="useform-tab-container">
        <div className="useform-tabs">
          <button
            className={!isLogin ? "useform-tab-btn active" : "useform-tab-btn"}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
          <button
            className={isLogin ? "useform-tab-btn active" : "useform-tab-btn"}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
        </div>
      </div>

      <div className="useform-content">
        {isLogin ? <Login /> : <Signup />}
      </div>
    </div>
  );
};

export default UseForm;
