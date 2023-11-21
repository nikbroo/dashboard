import React, { useEffect, useState } from "react";
import "./style.css";
import search_line_icon from "../../images/search_line_icon.png";
import Popup from "./popup/Popup";
import { useDispatch, useSelector } from "react-redux";
import { filterDispatch, searchDispatch } from "../../reducers/dataSlice"; 


const Header = () => {
  let filterDataFinal = useSelector((state) => state.data.dataState);
  const [searchData, setSearchData] = useState("");
  let searchFinalData = []

  const dispatch = useDispatch();

  const handleInput = (e) => {
    setSearchData(e.target.value);
  };
  useEffect(() => {
    let searchFinalData = []
    for (let i of filterDataFinal) {
      if (i.teacherName.toLowerCase().includes(searchData.toLowerCase())) {
        searchFinalData.push(i)
      }
    }
    dispatch(searchDispatch(searchFinalData))
    console.log("hlis",searchFinalData)
  }, [searchData]);

  return (
    <div className="mainHeader">
      <div className="userName w-20">
        <p>Welcome , Nikhil!!</p>
      </div>
      <div className="searchBar w-60">
        <div className="search_field">
          <input
            onChange={handleInput}
            type="text"
            placeholder="Search here..."
          />
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
