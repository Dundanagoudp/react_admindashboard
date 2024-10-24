import '../css/Dashbord.css';
import React from 'react';
import { DashboardBox } from '../DashboardBox/Boxes';
import { FaUserCircle } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { TbStars } from "react-icons/tb";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";





export const Dashboard = () => {
  return (
    <div className="content">
      <div className="main-content w-100"> 
        <div className="right-content">
          <div className="dashboardBoxWrapper">
          <DashboardBox color={["#1da256", "#48d483"]} icon={<FaUserCircle /> } grow={true} grow1={false} icon1={<FaArrowTrendUp />} />
          <DashboardBox color={["#c012e2", "#eb64fe"]} icon={<FaCartArrowDown/>}  grow={false} grow1={true} icon2={<FaArrowTrendDown />} />
          <DashboardBox color={["#2c78e5", "#60aff5"]} icon={<FaShoppingBag/>}grow={false} grow1={true} icon2={<FaArrowTrendDown />}/>
          <DashboardBox color={["#e1950e", "#f3cd29"]} icon={<TbStars/>}grow={false} grow1={true} icon2={<FaArrowTrendDown />}/>

          </div>
          <div className="dashboardBoxWrapperRow">
            <div className="box">Right Box</div> 
          </div>
        </div>
      </div>
    </div>
  );
};
