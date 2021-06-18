import React from "react";
import { useGlobalContext } from "../Provider";
import { Link } from "react-router-dom";
import { MdCancel } from "react-icons/md";

const SideBar = () => {
  const { sideBar, closesideBar } = useGlobalContext();

  return (
    <div
      className="sideBar-div"
      style={{ display: sideBar === true ? "flex" : "none" }}
    >
      <div>
        <i>
          <MdCancel onClick={() => closesideBar()} />
        </i>
      </div>
      <div className="sideBar-list-container">
        <ul className="sideBar-list">
          <li>
            <Link to="/Home">
              <i></i>Home
            </Link>
          </li>
          <li>
            <Link to="/Gallery">
              <i></i>Gallery
            </Link>
          </li>
          <li>
            <Link to="/Customer">
              <i></i>
            </Link>
          </li>
          <li>
            <Link to="/Our Vision">
              <i></i>Our Vision
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
