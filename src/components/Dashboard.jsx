import '../css/Dashbord.css';
import React from 'react';
import { DashboardBox } from '../DashboardBox/Boxes';
import { FaUserCircle } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { TbStars } from "react-icons/tb";



export const Dashboard = () => {
  return (
    <div className="content">
      <div className="main-content w-100"> 
        <div className="right-content">
          <div className="dashboardBoxWrapper">
          <DashboardBox color={["#1da256", "#48d483"]} icon={<FaUserCircle />}/>
          <DashboardBox color={["#c012e2", "#eb64fe"]} icon={<FaCartArrowDown/>}/>
          <DashboardBox color={["#2c78e5", "#60aff5"]} icon={<FaShoppingBag/>}/>
          <DashboardBox color={["#e1950e", "#f3cd29"]} icon={<TbStars/>}/>

          </div>
          <div className="dashboardBoxWrapperRow">
            <div className="box">Right Box</div> 
          </div>
        </div>
      </div>
    </div>
  );
};
