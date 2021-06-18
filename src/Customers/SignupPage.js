import React from "react";
import { Link } from "react-router-dom";
import "./Customer.css";

const SignupPage = ({
  handleChangeName,
  handleChangeConfirmPassword,
  handleChangePassword,
  handleChangeSex,
  handleChangeSurName,
  handleChangeUserName,
  handleClick,
}) => {
  return (
    <div className="signup-container">
      <div className="signup_div">
        <div className="Q-div">
          <p className="Q-tag">
            Already have an account?
            <Link to="./Customer" className="link">
              signIn
            </Link>
          </p>
        </div>
        <div className="signup-child">
          <form className="signupform">
            <label htmlFor="name"> Name</label>
            <input
              type="text"
              name="name"
              onInput={(e) => handleChangeName(e)}
              placeholder="Name"
              className="input1"
            />
            <label htmlFor="surname">Surname</label>
            <input
              type="text"
              name="surname"
              onInput={(e) => handleChangeSurName(e)}
              placeholder="Surname"
              className="input2"
            />
            <select
              className="select-options"
              name="sex"
              onInput={(e) => handleChangeSex(e)}
            >
              <option value="male" name="male">
                Male
              </option>
              <option value="female" name="female">
                Female
              </option>
            </select>
            <label htmlFor="text">User Name</label>
            <input
              type="text"
              name="text"
              onInput={(e) => handleChangeUserName(e)}
              placeholder="UserName"
              className="input3"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onInput={(e) => handleChangePassword(e)}
              placeholder="Password"
              className="input4"
            />
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password"
              onInput={(e) => handleChangeConfirmPassword(e)}
              className="input5"
            />
            <button
              className="submit-btn"
              type="submit"
              onClick={(e) => handleClick(e)}
            >
              Submit {/* <Link to="/Customer">signup</Link> */}
            </button>
          </form>
        </div>
        <div className="agreement-div">
          <p1 className="agreement-text">
            By clicking "SignUp" you agree to our terms and condition
            <br /> of service and privacy.
          </p1>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
