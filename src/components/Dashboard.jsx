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
import { Chart } from "react-google-charts";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// Chart data and options for graph
export const chartData = [
  ["Year", "Sales", "Expenses"],
  ["2013", 1000, 400],
  ["2014", 1170, 460],
  ["2015", 660, 1120],
  ["2016", 1030, 540],
];

export const chartOptions = {
  title: "Company Performance",
  hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  chartArea: { width: "50%", height: "70%" },
  backgroundColor: 'transparent',  // Transparent background for the chart
};

// Options for the menu dropdown
const menuOptions = [
  'Last 24 Hours',
  'Last 7 Days',
  'Last 30 Days',
  'All Time',
];

const ITEM_HEIGHT = 48;

export const Dashboard = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showBy, setShowBy] = useState('');
  const [categoryBy, setCategoryBy] = useState('');
  const [brandBy, setBrandBy] = useState('');  // Corrected here
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleChange = (event) => {
    setShowBy(event.target.value); 
  };

  const handleChange2 = (event) => {
    setCategoryBy(event.target.value); 
  };

  const handleChange3 = (event) => {
    setBrandBy(event.target.value); 
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
                  {menuOptions.map((option) => (
                    <MenuItem key={option} onClick={handleClose} className="menu">
                      <IoTimerOutline />
                      {option}
                    </MenuItem>
                  ))}
                </Menu>
              </div>
              
              <h3 className="text-white font-weight-bold">$3,45,678</h3>
              <p>3,45,67 in last month</p>

              <Chart
                chartType="AreaChart"
                width="410px"
                height="250px"  
                data={chartData}
                options={chartOptions}
              />
            </div>
          </div> 
        </div>
      </div>
      
      <div className="card shadow border-0 p-2">
        <h3 className="hd">Best Selling Products</h3>
        <div className="row cardFilters mt-3">
          <div className="col">
            <h4>Show By</h4>
            <FormControl  size="small" className="w-100">
            <Select
                value={showBy}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                labelId="demo-select-small-label"
                className="w-100"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="col">
            <h4>Category By</h4>
            <FormControl  size="small" className="w-100">
              <Select
                value={categoryBy}
                onChange={handleChange2}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                className="w-100"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="col">
            <h4>Brand By</h4>
            <FormControl  size="small" className="w-100">
              <Select
                value={brandBy}
                onChange={handleChange3}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                className="w-100"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="col">
            <h4>Brand By</h4>
            <FormControl  size="small" className="w-100">
              <Select
                value={brandBy}
                onChange={handleChange3}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                className="w-100"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>

        </div>

        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>UID</th>
                <th>UID</th>
                <th>UID</th>
                <th>UID</th>
                <th>UID</th>
                <th>UID</th>
                <th>UID</th>
                <th>UID</th>
                <th>UID</th>
                <th>UID</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};
