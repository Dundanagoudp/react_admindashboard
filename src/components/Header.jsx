import { Link } from "react-router-dom";
import { MdMenuOpen } from "react-icons/md";
import { Button } from "@mui/material";
import { SearchBox } from "./SearchBox";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import { useState } from "react";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';
import { IoShieldHalf } from "react-icons/io5";

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElNotifications, setAnchorElNotifications] = useState(null); // For notifications dropdown

  const open = Boolean(anchorEl);
  const openNotifications = Boolean(anchorElNotifications); // For notifications dropdown

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNotificationsClick = (event) => {
    setAnchorElNotifications(event.currentTarget);
  };

  const handleNotificationsClose = () => {
    setAnchorElNotifications(null);
  };

  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container-fluid w-100">
          <div className="row d-flex align-items-center w-100">
            {/* Logo Wrapper */}
            <div className="col-sm-2 part1">
              <Link to={'/'} className="d-flex align-items-center logo">
                <img src="/logo1.png" alt="Logo" style={{ marginRight: '10px' }} />
                <span className="ml-2">CHETAN</span>
              </Link>
            </div>
            <div className="col-3 d-flex align-items-center part2 pl-4">
              <Button className="rounded-circle" style={{ marginRight: '15px' }}>
                <MdMenuOpen />
              </Button>
              <SearchBox />
            </div>
            <div className="col-7 d-flex align-items-center justify-content-end part3">
              <Button className="rounded-circle" style={{ marginRight: '15px' }}>
                <MdOutlineLightMode />
              </Button>
              <Button className="rounded-circle" style={{ marginRight: '15px' }} onClick={handleClick}>
                <IoMdCart />
              </Button>

              <Button className="rounded-circle" style={{ marginRight: '15px' }}>
                <MdEmail />
              </Button>
              <Button className="rounded-circle" style={{ marginRight: '15px' }} onClick={handleNotificationsClick}>
                <FaRegBell />
              </Button>

              {/* Notifications Dropdown */}
              {/* Notifications Dropdown */}
              <Menu
  anchorEl={anchorElNotifications}
  id="notifications-menu"
  open={openNotifications}
  onClose={handleNotificationsClose}
  PaperProps={{
    elevation: 3, // Add subtle elevation for depth
    sx: {
      width: '320px', // Slightly wider dropdown for better spacing
      maxHeight: '400px', // Maximum height for scroll
      overflowY: 'auto', // Enable vertical scrolling
      filter: 'drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.32))',
      mt: 1.5,
      borderRadius: '12px', // Smooth border radius for rounded corners
      padding: '10px', // Extra padding for breathing space
      '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        right: 14,
        width: 10,
        height: 10,
        bgcolor: 'background.paper',
        transform: 'translateY(-50%) rotate(45deg)',
        zIndex: 0,
      },
    },
  }}
  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
>
  <div className="head pl-3 pb-2">
    <h4>Orders (12)</h4>
  </div>
  
  {/* Container for notifications */}
  <div>
    {/* Each notification should be a separate MenuItem */}
    <MenuItem onClick={handleClose}>
      <div className="myAcc d-flex align-items-center">
        <div className="userImg">
          <span className="rounded-circle">
            <img src="/admin.png" alt="img" />
          </span>
        </div>
        <div className="dropdownInfo">
          <h4>
            <span>
              <b>Chetan</b> added best values <b>Good dealing</b>
            </span>
          </h4>
          <p className="text-sky">Few minutes ago</p>
        </div>
      </div>
    </MenuItem>
    
    <MenuItem onClick={handleClose}>
      <div className="myAcc d-flex align-items-center">
        <div className="userImg">
          <span className="rounded-circle">
            <img src="/admin.png" alt="img" />
          </span>
        </div>
        <div className="dropdownInfo">
          <h4>
            <span>
              <b>Chetan</b> added best values <b>Good dealing</b>
            </span>
          </h4>
          <p className="text-sky">Few minutes ago</p>
        </div>
      </div>
    </MenuItem>
    
    <MenuItem onClick={handleClose}>
      <div className="myAcc d-flex align-items-center">
        <div className="userImg">
          <span className="rounded-circle">
            <img src="/admin.png" alt="img" />
          </span>
        </div>
        <div className="dropdownInfo">
          <h4>
            <span>
              <b>Chetan</b> added best values <b>Good dealing</b>
            </span>
          </h4>
          <p className="text-sky">Few minutes ago</p>
        </div>
      </div>
    </MenuItem>

    <MenuItem onClick={handleClose}>
      <div className="myAcc d-flex align-items-center">
        <div className="userImg">
          <span className="rounded-circle">
            <img src="/admin.png" alt="img" />
          </span>
        </div>
        <div className="dropdownInfo">
          <h4>
            <span>
              <b>Chetan</b> added best values <b>Good dealing</b>
            </span>
          </h4>
          <p className="text-sky">Few minutes ago</p>
        </div>
      </div>
    </MenuItem>
  </div>

  <button className="btn-blue w-100">view all notification</button>
</Menu>

              {/* Account Dropdown */}
              <div className="myAccWrapper">
                <Button className="myAcc d-flex align-items-center" onClick={handleClick}>
                  <div className="userImg">
                    <span className="rounded-circle">
                      <img src="/admin.png" alt="photo" />
                    </span>
                  </div>
                  <div className="userInfo">
                    <h4>Chetan Patil</h4>
                    <p className="mb-0">@Chetan77</p>
                  </div>
                </Button>
              </div>

              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '&::before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  My account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <IoShieldHalf />
                  </ListItemIcon>
                  Reset Password
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
