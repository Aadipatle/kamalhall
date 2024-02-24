//
import React, { useState } from "react";
import style  from './Login.module.css';


import { useNavigate } from "react-router-dom";

const Login = ({setOpen}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    
    if (username.trim() === "" || password.trim() === "") {
      setError("Please enter both username and password.");
      return;
    }

 
    if (username === "kamalcelebration" && password === "Kamal@$2024") {
      setLoggedIn(true);
      setError("");
      alert("Login successful!");
      navigate("/data");
    } else {
      setError("Invalid credentials. Please try again.");
    }

    setOpen(true)
  };

 

  return (
    <>
      
        <div className={style.mainabb}>
        
          <div className={style.formWrapperr}>
            <div className={style.headingEnn}>Admin Login</div>
            <form className={style.form}>
              <input
                type="text"
                value={username}
                placeholder="Username"
                onChange={(e) => {
                  setUsername(e.target.value);
                  setError(""); 
                }}
                className="inputt"
              />

              <input
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(""); 
                }}
                className="inputt"
              />

              {error && <p style={{ color: "red" }}>{error}</p>}
              <button className="login-button" onClick={handleLogin}>
                Login
              </button>
            </form>
          </div>
          </div>
       
      
    </>
  );
};

export default Login;
