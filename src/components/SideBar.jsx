import React, { useState } from "react"; // Import useState
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
  const [isProductsOpen, setIsProductsOpen] = useState(false); // State to manage submenu visibility

  const toggleProductsMenu = () => {
    setIsProductsOpen(!isProductsOpen); // Toggle the submenu
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
        <li className="menu-item">
          <Button className="w-100 sidebar-button" onClick={toggleProductsMenu}>
            <span className="icon"><FaProductHunt /></span> 
            <span className="menu-text">Products</span>
            <span className="arrow"><FaAngleRight /></span> 
          </Button>
          {isProductsOpen && ( // Render submenu conditionally
            <ul className="submenu"> 
              <li className="submenu-item"><Link to="#">Products List</Link></li>
              <li className="submenu-item"><Link to="#">Product View</Link></li>
              <li className="submenu-item"><Link to="#">Product Upload</Link></li>
            </ul>
          )}
        </li>
        <li className="menu-item">
          <Button className="w-100 sidebar-button">
            <span className="icon"><MdDashboard /></span> 
            <span className="menu-text">Users</span>
            <span className="arrow"><FaAngleRight /></span> 
          </Button>
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
            <span className="icon"><IoSettingsSharp /></span> 
            <span className="menu-text">Settings</span>
            <span className="arrow"><FaAngleRight /></span> 
          </Button>
        </li>
        {/* <li className="menu-item">
          <Button className="w-100 sidebar-button">
            <span className="icon"><MdOutlineLogout /></span> 
            <span className="menu-text">Logout</span>
            <span className="arrow"><FaAngleRight /></span> 
          </Button>
        </li> */}
      </ul>

      <br/>
      <div className="logoutWrapper"></div>

    </div>
  );
};
