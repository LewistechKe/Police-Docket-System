import React from 'react';

import { Link } from "react-router-dom";
import profileImg from "../../assets/images/profile-02.jpg";
import "./top-nav.css";

const TopNav = () => {
  return (
    <div className='top_nav'>
      <div className="top_nav-wrapper">
        <div className="search_box">
          <input type="text" placeholder='search or type' />
          <span>
            <i className="ri-search-line"></i>
            </span>
        </div>
        <div className="top_nav-right">
          <span className='notification'><i 
          className="ri-notification-3-line"></i>
          <span className='badge'>1</span>
          </span>
          <div className="profile">
            <Link to='/settings'><img src={profileImg} alt="" /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopNav;