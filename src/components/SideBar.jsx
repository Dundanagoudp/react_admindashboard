import React from "react";
import { IconButton, Typography } from "@mui/material";
import '../css/SideBar.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { IoIosArrowForward } from "react-icons/io";

export const SideBar = () => {
  const menuItems = [
    {
      segment: 'dashboard',
      title: 'Dashboard',
      icon: <DashboardIcon />,
    },
    {
      segment: 'orders',
      title: 'Orders',
      icon: <ShoppingCartIcon />,
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
      <div className="sidebar-header">
        <Typography variant="h6" className="sidebar-title">
          Admin
        </Typography>
      </div>

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
            <div key={index} className="menu-item">
              <IconButton>
                {item.icon}
              </IconButton>
              <Typography variant="body1">{item.title}</Typography>
              <IoIosArrowForward style={{ marginLeft: 'auto' }} /> {/* Align the arrow icon to the right */}
            </div>
          );
        })}
      </div>
    </div>
  );
};
