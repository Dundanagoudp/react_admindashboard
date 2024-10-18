import React from "react";
import { IconButton, Typography } from "@mui/material";
import '../css/SideBar.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { IoIosArrowForward } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard/Dashboard";



export const SideBar = () => {
  const menuItems = [
    {
      segment: 'dashboard',
      title: 'Dashboard',
      icon: <DashboardIcon />,
      link: '/dashboard',
      path:"/dashboard",
     element :<Dashboard />
    },
    {
      segment: 'users',
      title: 'Users',
      icon: <FaUserCircle />,
      link:"/users",
    },
    {
      segment: 'notification',
      title: 'Notifications',
      icon: <IoNotificationsOutline /> ,
    },
    {
      segment: 'Messages',
      title: 'Messages',
      icon: <MdMessage /> ,
    },
    {
      segment: 'orders',
      title: 'Orders',
      icon: <ShoppingCartIcon />,
    },
    {
      segment: 'Settings',
      title: 'Settings',
      icon: <IoSettingsSharp />,
    },
    {
      segment: 'Messages',
      title: 'Messages',
      icon: <MdMessage /> ,
    },
    {
      segment: 'orders',
      title: 'Orders',
      icon: <ShoppingCartIcon />,
    },
    {
      segment: 'Settings',
      title: 'Settings',
      icon: <IoSettingsSharp />,
    },
//     {
//       kind: 'divider',
//     },
//     {
//       kind: 'header',
//       title: 'Analytics',
//     },
    {
      segment: 'reports',
      title: 'Reports',
      icon: <BarChartIcon />,
      children: [
        {
          segment: 'sales',
          title: 'Sales',
          icon: <DescriptionIcon />,
        },
        {
          segment: 'traffic',
          title: 'Traffic',
          icon: <DescriptionIcon />,
        },
      ],
    },
    {
      segment: 'integrations',
      title: 'Integrations',
      icon: <LayersIcon />,
    },
  ];

  return (
    <div className="sidebar">
      {/* <div className="sidebar-header">
        <Typography variant="h6" className="sidebar-title">
          Admin
        </Typography>
      </div> */}

      <div className="sidebar-menu">
        {menuItems.map((item, index) => {
          if (item.kind === 'divider') {
            return <hr key={index} />;
          }
          if (item.kind === 'header') {
            return (
              <Typography key={index} variant="subtitle1" className="sidebar-header">
                {item.title}
              </Typography>
            );
          }
          return (
            <Link to={item.link} key={index} className="menu-item-link">
            <div key={index} className="menu-item">
              <IconButton>
                {item.icon}
              </IconButton>
              <Typography variant="body1">{item.title}</Typography>
              <IoIosArrowForward style={{ marginLeft: 'auto' }} /> {/* Align the arrow icon to the right */}
            </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
