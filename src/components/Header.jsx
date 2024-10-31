import { Link } from "react-router-dom";
import { MdMenuOpen, MdOutlineLightMode, MdDarkMode, MdOutlineMenu } from "react-icons/md";
import { Button, Menu, MenuItem, ListItemIcon, Divider } from "@mui/material";
import { SearchBox } from "./SearchBox";
import { IoMdCart } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import { useContext, useState } from "react";
import { myContext } from "./AppLayout";
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';
import { IoShieldHalf } from "react-icons/io5";

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElNotifications, setAnchorElNotifications] = useState(null);

  const context = useContext(myContext); // Use context for managing states
  const open = Boolean(anchorEl);
  const openNotifications = Boolean(anchorElNotifications);

  // Toggle theme mode
  const toggleTheme = () => {
    context.setThemeMode((prevMode) => !prevMode); // Toggle between light and dark mode
  };

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleNotificationsClick = (event) => setAnchorElNotifications(event.currentTarget);
  const handleNotificationsClose = () => setAnchorElNotifications(null);

  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container-fluid w-100">
          <div className="row d-flex align-items-center w-100">
            <div className="col-sm-2 part1">
              <Link to="/" className="d-flex align-items-center logo">
                <img src="/logo1.png" alt="Logo" style={{ marginRight: '10px' }} />
                <span className="ml-2">CHETAN</span>
              </Link>
            </div>
            <div className="col-3 d-flex align-items-center part2 pl-4">
              <Button className="rounded-circle" onClick={() => context.setIsToggleSidebar(!context.isToggleSidebar)} style={{ marginRight: "15px" }}>
                {context.isToggleSidebar ? <MdMenuOpen /> : <MdOutlineMenu />}
              </Button>
              <SearchBox />
            </div>
            <div className="col-7 d-flex align-items-center justify-content-end part3">
              <Button className="rounded-circle" style={{ marginRight: '15px' }} onClick={toggleTheme}>
                {context.themeMode ? <MdOutlineLightMode /> : <MdDarkMode />}
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
              <Menu
                anchorEl={anchorElNotifications}
                id="notifications-menu"
                open={openNotifications}
                onClose={handleNotificationsClose}
                PaperProps={{
                  elevation: 3,
                  sx: {
                    width: '320px',
                    maxHeight: '400px',
                    overflowY: 'auto',
                    filter: 'drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.32))',
                    mt: 1.5,
                    borderRadius: '12px',
                    padding: '10px',
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
                {/* Example notification items */}
                <MenuItem onClick={handleNotificationsClose}>
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
                <MenuItem onClick={handleNotificationsClose}>
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
                <MenuItem onClick={handleNotificationsClose}>
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
                <MenuItem onClick={handleNotificationsClose}>
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
                <button className="btn-blue w-100">View all notifications</button>
              </Menu>

              {/* Account Section */}
              {context.isLogin ? (
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
              ) : (
                <Link to="/login"> 
                  <Button className="btn-blue1 btn-lg btn-round">SIGN IN</Button> 
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
