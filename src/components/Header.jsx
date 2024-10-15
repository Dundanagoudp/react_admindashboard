import { Link } from "react-router-dom";
import { MdMenuOpen } from "react-icons/md";
import { Button } from "@mui/material";
import { SearchBox } from "./SearchBox";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";




export const Header = () => {
  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container-fluid w-100">
          <div className="row d-flex align-items-center w-100">
            {/* Logo Wrapper */}
            <div className="col-sm-2 part1">
              <Link to={'/'} className="d-flex align-items-center logo">
                <img src="/logo.png" alt="Logo" />
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
            <Button className="rounded-circle" style={{ marginRight: '15px' }}><MdOutlineLightMode /> </Button>
            <Button className="rounded-circle" style={{ marginRight: '15px' }}><IoMdCart /></Button>
            <Button className="rounded-circle" style={{ marginRight: '15px' }}><MdEmail /></Button>
            <Button className="rounded-circle" style={{ marginRight: '15px' }}><FaRegBell /></Button>

            <div className="myAcc d-flex align-items-center">
              <div className="userImg">
                <span className="rounded-circle">
                  <img src="/admin1.png" alt="photo" />
                </span>
              </div>
            </div>
              </div>
            
          </div>
        </div>
      </header>
    </>
  );
};
