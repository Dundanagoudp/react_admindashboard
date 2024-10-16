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
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';

export const Header = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
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
                  <Avatar /> Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Add another account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
              <Button className="rounded-circle" style={{ marginRight: '15px' }}>
                <MdEmail />
              </Button>
              <Button className="rounded-circle" style={{ marginRight: '15px' }}>
                <FaRegBell />
              </Button>

              <div className="myAccWrapper">
                <Button className="myAcc d-flex align-items-center">
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
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
