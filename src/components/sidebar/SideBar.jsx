import React, { useState } from "react";
import "./style.css";
// import logo from "../../images/logo.png";
import toggle from "../../images/three-horizontal-lines-icon.png";
import data from "./data"


const SideBar = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const clickHandler = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-20 sideBar">
      <div className="logoSection">
        <div className="logo">
          {/* <img src={logo} alt="" /> */}
        </div>
        <div className="mainToggle">
          <img src={toggle} alt="" />
        </div>
      </div>
      <div className="sideMenu">
        <ul>
          {
            data.map((data, index) => (
              <li onClick={() => clickHandler(index)}
              className={`menuItem ${index === activeIndex ? "active" : ""}`}
              key={index}>
                <div className="bar"></div>
                <img src={data.img} alt="" />
                {data.name}
                
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
