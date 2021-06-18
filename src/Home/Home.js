import React from "react";
import "./Home.css";
import { Component1, Component2 } from "./Components";
import { Link } from "react-router-dom";
import SideBar from "../Component/SideBar";

const Home = () => {
  return (
    <>
      <section className="home">
        <SideBar />
        <Component1
          title="You are Welcome to our page"
          motto="princint and clearity is what we do"
        >
          <Link to="/Gallery">
            <button className="button">browse our style</button>
          </Link>
        </Component1>
      </section>
      <section>
        <Component2 />
      </section>
    </>
  );
};

export default Home;
