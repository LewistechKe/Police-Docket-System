import React from 'react';

import { NavLink } from "react-router-dom";
import navLinks from '../../assets/dummy-data/navLinks'
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar_top">
        <h2>
          <span>
            <i className="ri-alarm-warning-line"></i>
          </span>{" "}
          Case Docket
          </h2>
      </div>

      <div className="sidebar_content">
        <div className="menu">
          <ul className="nav_list">
            {navLinks.map((item,index) => (
                <li className="nav_item" key={index}>
                  <NavLink to={item.path} className={(navClass) => 
                    navClass.isActive ? 'nav_active nav_link' :
                     'nav_link'
                     }>
                  
                    <i className={item.icon}></i>
                   
                    {item.display}
                </NavLink>
                </li>
              )) }
          </ul>
        </div>

        <div className="sidebar_bottom">
          <span>
            <i className="ri-logout-circle-r-line"></i>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;