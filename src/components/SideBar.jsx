import React, { useState } from "react";
import { Button } from "@mui/material";
import { MdDashboard, MdMessage } from "react-icons/md"; 
import { FaAngleRight, FaProductHunt } from "react-icons/fa"; 
import { LuShoppingCart } from "react-icons/lu"; 
import { IoIosNotifications } from "react-icons/io"; 
import { IoSettingsSharp } from "react-icons/io5"; 
import { Link } from "react-router-dom"; 
import { MdOutlineLogout } from "react-icons/md";

import '../css/SideBar.css';  

export const SideBar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false); 
  const [isUsersOpen, setIsUsersOpen] = useState(false); 

  const toggleProductsMenu = () => {
    setIsProductsOpen(!isProductsOpen); 
    setIsUsersOpen(false); 
  };

  const toggleUsersMenu = () => {
    setIsUsersOpen(!isUsersOpen); 
    setIsProductsOpen(false); 
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-title">Admin Dashboard</h2>
      </div>
      <ul className="sidebar-menu">
        <li className="menu-item">
          <Button className="w-100 sidebar-button">
            <span className="icon"><MdDashboard /></span> 
            <span className="menu-text">Dashboard</span>
            <span className="arrow"><FaAngleRight /></span> 
          </Button>
        </li>
        
        {/* Products Menu */}
        <li className={`menu-item ${isProductsOpen ? 'active' : ''}`}> {/* Added conditional class */}
          <Button className="w-100 sidebar-button" onClick={toggleProductsMenu}>
            <span className="icon"><FaProductHunt /></span> 
            <span className="menu-text">Products</span>
            <span className={`arrow ${isProductsOpen ? 'rotate' : ''}`}><FaAngleRight /></span> 
          </Button>
          {isProductsOpen && (
            <ul className="submenu"> 
              <li className="submenu-item"><Link to="#">Products List</Link></li>
              <li className="submenu-item"><Link to="#">Product View</Link></li>
              <li className="submenu-item"><Link to="#">Product Upload</Link></li>
            </ul>
          )}
        </li>

        {/* Users Menu */}
        <li className={`menu-item ${isUsersOpen ? 'active' : ''}`}> {/* Added conditional class */}
          <Button className="w-100 sidebar-button" onClick={toggleUsersMenu}>
            <span className="icon"><MdDashboard /></span> 
            <span className="menu-text">Users</span>
            <span className={`arrow ${isUsersOpen ? 'rotate' : ''}`}><FaAngleRight /></span> 
          </Button>
          {isUsersOpen && (
            <ul className="submenu"> 
              <li className="submenu-item"><Link to="#">Users List</Link></li>
              <li className="submenu-item"><Link to="#">User View</Link></li>
              <li className="submenu-item"><Link to="#">User Management</Link></li>
            </ul>
          )}
        </li>

        <li className="menu-item">
          <Button className="w-100 sidebar-button">
            <span className="icon"><LuShoppingCart /></span> 
            <span className="menu-text">Orders</span>
            <span className="arrow"><FaAngleRight /></span> 
          </Button>
        </li>
        <li className="menu-item">
          <Button className="w-100 sidebar-button">
            <span className="icon"><MdMessage /></span> 
            <span className="menu-text">Messages</span>
            <span className="arrow"><FaAngleRight /></span> 
          </Button>
        </li>
        <li className="menu-item">
          <Button className="w-100 sidebar-button">
            <span className="icon"><IoIosNotifications /></span> 
            <span className="menu-text">Notifications</span>
            <span className="arrow"><FaAngleRight /></span> 
          </Button>
        </li>
        <li className="menu-item">
          <Button className="w-100 sidebar-button">
            <span className="icon"><MdMessage /></span> 
            <span className="menu-text">Messages</span>
            <span className="arrow"><FaAngleRight /></span> 
          </Button>
        </li>
        <li className="menu-item">
          <Button className="w-100 sidebar-button">
            <span className="icon"><IoIosNotifications /></span> 
            <span className="menu-text">Notifications</span>
            <span className="arrow"><FaAngleRight /></span> 
          </Button>
        </li>
        <li className="menu-item">
          <Button className="w-100 sidebar-button">
            <span className="icon"><IoSettingsSharp /></span> 
            <span className="menu-text">Settings</span>
            <span className="arrow"><FaAngleRight /></span> 
          </Button>
        </li>
        <br/>
        <div className="logoutWrapper">
  <div className="logoutBox">
    <div className="logout">
      <Button variant="contained" className="logout-button">
        <MdOutlineLogout className="logout-icon" />
        Logout
      </Button>
    </div>
  </div>
</div>

      </ul>
    </div>
  );
}; 
