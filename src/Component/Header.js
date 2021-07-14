import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { useGlobalContext } from "../Provider";
import SubMenu from "./SubMenu";

const Header = ({ scroll }) => {
  const { opensideBar, displaySideBar } = useGlobalContext();
  return (
    <>
      <nav className={scroll > 25 ? "nav-fixed" : "nav_Header"}>
        <div className="nav_Div">
          <div className="h1_Div">
            <h1 className="h1">B-Alpha</h1>
          </div>
          <div className="list_Div">
            <ul className="ul">
              <li>
                <Link className="home_Link" to="/Home">
                  Home
                </Link>
              </li>
              <li onMouseOver={(e) => displaySideBar(e)}>
                <Link className="gallery_Link" to="/Gallery">
                  Gallery
                </Link>
              </li>
              <li onMouseOver={(e) => displaySideBar(e)}>
                <Link className="vision_Link" to="/Customer">
                  Customer
                </Link>
              </li>
              <li>
                <Link className="books_Link" to="/Vision">
                  Our Vision
                </Link>
              </li>
            </ul>
          </div>
          <div className="icon_Div">
            <FontAwesomeIcon
              className="icon"
              onClick={() => opensideBar()}
              icon={faBars}
            />
          </div>
          <SubMenu />
        </div>
      </nav>
    </>
  );
};

export default Header;
