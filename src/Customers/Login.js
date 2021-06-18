import React, { useState } from "react";
import "./Customer.css";
import { Link } from "react-router-dom";

export const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const handleUsername = (e) => {
    setusername(e.target.value);
  };
  const handlePassword = (e) => {
    setpassword(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    fetch("http://localhost:3002/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    setusername("");
    setpassword("");
    <Link to={`/Customer/${username}`} />;
  };

  return (
    <>
      <div className="logIn-container">
        <div className="logIn-div">
          <form htmlFor="customers" className="logIn-form">
            <label htmlFor="customers">User Name</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your UserName"
              onInput={(e) => handleUsername(e)}
              value={username}
              className="username-input"
            />
            <label htmlFor="customers">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onInput={(e) => handlePassword(e)}
              value={password}
              className="password-input"
            />
            <button
              type="submit"
              onClick={(e) => {
                handleClick(e);
              }}
              className="logIn-btn"
            >
              Log in
            </button>
          </form>
          <div className="signup-text">
            <p>
              You dont have an account? <Link to="./Signup">Signup</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
