import '../css/Dashbord.css';
import React, { useState } from 'react';
import { DashboardBox } from '../DashboardBox/Boxes';
import { FaUserCircle, FaCartArrowDown, FaShoppingBag } from "react-icons/fa";
import { TbStars } from "react-icons/tb";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IoTimerOutline } from "react-icons/io5";
import { Button } from "@mui/material";
import { BiDotsVerticalRounded } from "react-icons/bi";  

const options = [
  'Last 24 Hours',
  'Last 7 Days',
  'Last 30 Days',
  'All Time',
];

const ITEM_HEIGHT = 48;

export const Dashboard = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="content">
      <div className="main-content w-100">
        <div className="right-content">
          <div className="dashboardBoxWrapper">
            <DashboardBox color={["#1da256", "#48d483"]} icon={<FaUserCircle />} grow={true} grow1={false} icon1={<FaArrowTrendUp />} />
            <DashboardBox color={["#c012e2", "#eb64fe"]} icon={<FaCartArrowDown />} grow={false} grow1={true} icon2={<FaArrowTrendDown />} />
            <DashboardBox color={["#2c78e5", "#60aff5"]} icon={<FaShoppingBag />} grow={false} grow1={true} icon2={<FaArrowTrendDown />} />
            <DashboardBox color={["#e1950e", "#f3cd29"]} icon={<TbStars />} grow={false} grow1={true} icon2={<FaArrowTrendDown />} />
          </div>
          
          <div className="dashboardBoxWrapperRow">
            <div className="boxgraph">
              <div className="d-flex justify-content-between align-items-start w-100 top-ele">
                <h6 className="text-white1 mb-0">Total Sales</h6>
                <Button className="toggleIcon" onClick={handleClick}>
                  <BiDotsVerticalRounded />
                </Button>
                <Menu
                  id="long-menu"
                  MenuListProps={{
                    'aria-labelledby': 'long-button',
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: '20ch',
                    },
                  }}
                >
                  {options.map((option) => (
                    <MenuItem key={option} onClick={handleClose} className="menu">
                      <IoTimerOutline />
                      {option}
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
