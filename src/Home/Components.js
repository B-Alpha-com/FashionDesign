import React, { useState } from "react";
import "./Home.css";
const image = [
  "https://i.pinimg.com/originals/41/2e/81/412e8120a9f9e621237b1593ae0af4ec.jpg",
  "https://i.pinimg.com/originals/ee/40/d4/ee40d438991d28178d31ace6d84a9ae0.jpg",
  "https://i.pinimg.com/originals/fb/09/60/fb0960c4e79d1df173f5ab31a9e1351b.jpg",
  "https://i.pinimg.com/originals/36/24/dd/3624dd1d3d1cf98e933bca4a3e8ef8fb.jpg",
];

export const Component1 = ({ title, motto, children }) => {
  return (
    <div className="component1_div">
      <div className="h2_Div">
        <h2 className="h2" style={{ fontSize: "3rem", margin: 0 }}>
          {title}
        </h2>
      </div>
      <div className="p_Div">
        <p className="motto">{motto}</p>
      </div>
      <div className="child_Div">{children}</div>
    </div>
  );
};

export const Component2 = () => {
  return (
    <div className="container-div">
      <div className="h1-div">
        <h1 className="h1-text">Our Design</h1>
      </div>
      <div className="list-div">
        <div className="img1">
          <img src={image[0]} alt="the design" />
          <span className="span1">Native Materials</span>
        </div>
        <div className="img2">
          <img src={image[1]} alt="the design" />
          <span className="span2">Danshiki</span>
        </div>
        <div className="img3">
          <img src={image[2]} alt="the design" />
          <span className="span3">Up and Down</span>
        </div>
        <div className="img4">
          <img src={image[3]} alt="the design" />
          <span className="span4"></span>
        </div>
      </div>
    </div>
  );
};
