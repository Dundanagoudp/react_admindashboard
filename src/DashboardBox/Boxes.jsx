import { BiDotsVerticalRounded } from "react-icons/bi";
import { Button } from "@mui/material";
import { HiTrendingUp } from "react-icons/hi"; // You can use any icons here
import { TbStars } from "react-icons/tb"; // Import additional icons
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import { IoTimerOutline } from "react-icons/io5";


const ITEM_HEIGHT = 48; 
const options = ['Last Day', 'Last Week', 'Last Month','Last Year'];

export const DashboardBox = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      className="dashboardBox"
      style={{
        backgroundImage: `linear-gradient(to right, ${props.color?.[0]}, ${props.color?.[1]})`,
      }}
    >
      <div className="d-flex">

        <span className="chart">
          {props.icon1} 
        </span>

        <span className="chart">
          {props.icon2} 
        </span>
      </div>

      <div className="d-flex w-100 dashboard-content">
        <div className="col1">
          <h4 className="text-white total-users-title">Total Users</h4>
          <span className="text-white total-users-number">277</span>
        </div>
        <div className="ml-auto icon-container">
          <span className="icon">
            {props.icon} {/* Existing icon prop */}
          </span>
        </div>
      </div>

      <div className="d-flex align-items-center w-100 bottomEle">
        <h6 className="text-white1 mb-0 mt-0">Last Month</h6>
        <Button className="ml-auto toggleIcon" onClick={handleClick}>
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
  );
};
