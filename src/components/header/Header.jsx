import React from "react";
import "./style.css";
import search_line_icon from "../../images/search_line_icon.png";
import Popup from "./popup/Popup";

const Header = () => {
  return (
    <div className="mainHeader">
      <div className="userName w-20">
        <p>Welcome , Nikhil!!</p>
      </div>
      <div className="searchBar w-60">
        <div className="search_field">
          <input type="text" placeholder="Search here..." />
          <div className="search_input_icon">
            <img src={search_line_icon} alt="" />
          </div>
        </div>
        <Popup />
      </div>
      <div className="profile w-20"></div>
    </div>
  );
};

export default Header;
