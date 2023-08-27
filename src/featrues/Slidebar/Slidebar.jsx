import React from "react";
import "./slidebar.css";
import { Link } from "react-router-dom";
import { MdHomeFilled } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { IoLibrary } from "react-icons/io5";
export default function Slidebar() {
  return (

    <div className="container-1">
      <div className="container-1-1">
        <Link to='/'>
        <div className="home">
          <div className="home-icon">
            <MdHomeFilled />
          </div>
          <div className="home-lable">Home</div>
        </div>
        </Link>
        <Link to="Search">
        <div className="search">
          <div className="search-icon">
            <BsSearch />
          </div>
          <div className="search-lable">search</div>
        </div>
        </Link>
      </div>
    
      <div className="container-1-2">
        <div className="container-1-2-1">
          <div className="yourLibary">
            <div className="Library-icon">
              <IoLibrary />
            </div>
            <div className="Library-lable">Your Library</div>
            </div>
            <div className="plus">
              <div className="plus-icon">
                <AiOutlinePlus />
              </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}
