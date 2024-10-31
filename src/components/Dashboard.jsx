import '../css/Dashbord.css';
import React, { useContext, useEffect, useState } from 'react';
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
import { MdStarRate } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { IoPencilSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import Pagination from '@mui/material/Pagination';
import { myContext } from '../components/AppLayout';


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
  backgroundColor: 'transparent',
};

const menuOptions = ['Last 24 Hours', 'Last 7 Days', 'Last 30 Days', 'All Time'];
const ITEM_HEIGHT = 48;

export const Dashboard = () => {
  const context = useContext(myContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showBy, setShowBy] = useState('');
  const [categoryBy, setCategoryBy] = useState('');
  const [brandBy, setBrandBy] = useState('');
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

  useEffect(() => {
    context.setIsHideSidebarAndHeader(false);
    
    window.scrollTo(0,0);
  }, []);


  return (
    <div className="dashboard-scroll-container">
      <div className="main-content">
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
        
        <div className="card shadow border-0 p-2">
          <h3 className="hd">Best Selling Products</h3>
          <div className="row cardFilters mt-3">
            <div className="col">
              <h4>Show By</h4>
              <FormControl size="small" className="w-100">
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
              <FormControl size="small" className="w-100">
                <Select
                  value={categoryBy}
                  onChange={handleChange2}
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
              <h4>Brand By</h4>
              <FormControl size="small" className="w-100">
                <Select
                  value={brandBy}
                  onChange={handleChange3}
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
              <h4>Brand By</h4>
              <FormControl size="small" className="w-100">
                <Select
                  value={brandBy}
                  onChange={handleChange3}
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
          </div>
          
          <div className="table-responsive mt-3" style={{ overflowX: "auto" }}>
            <table className="table table-bordered">
              <thead className="thrad-dark">
                <tr>
                  <th>UID</th>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Brand</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Rating</th>
                  <th>Order</th>
                  <th>Sales</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
  <tr>
    <td>#1</td>
    <td>
      <div className="d-flex product-info">
        <img src="/logo1.png" alt="Product" className="product-image" />
        <div className="info">
          <h6 className="product-name">Men's T-shirt</h6>
          <p className="product-description">Men's top class shirt...</p>
        </div>
      </div>
    </td>
    <td>Men</td>
    <td>NetPlay</td>
    <td>
      <del className="old-price">₹1000</del><br />
      <span className="new-price">₹999</span>
    </td>
    <td>100</td>
    <td><MdStarRate className="good-rating" /> 4.5</td>
    <td>380</td>
    <td>38k</td>
    <td>
    <div className="actions d-flex align-items-center">
    <Button color="secondary"><FaEye /></Button>
        <Button color="success"><IoPencilSharp /></Button>
        <Button color="danger"><MdDelete /></Button>
      </div>
    </td>
  </tr>
  <tr>
    <td>#1</td>
    <td>
      <div className="d-flex product-info">
        <img src="/logo1.png" alt="Product" className="product-image" />
        <div className="info">
          <h6 className="product-name">Men's T-shirt</h6>
          <p className="product-description">Men's top class shirt...</p>
        </div>
      </div>
    </td>
    <td>Men</td>
    <td>NetPlay</td>
    <td>
      <del className="old-price">₹1000</del><br />
      <span className="new-price">₹999</span>
    </td>
    <td>100</td>
    <td><MdStarRate className="good-rating" /> 4.5</td>
    <td>380</td>
    <td>38k</td>
    <td>
    <div className="actions d-flex align-items-center">
    <Button color="secondary"><FaEye /></Button>
        <Button color="success"><IoPencilSharp /></Button>
        <Button color="danger"><MdDelete /></Button>
      </div>
    </td>
  </tr>
  <tr>
    <td>#1</td>
    <td>
      <div className="d-flex product-info">
        <img src="/logo1.png" alt="Product" className="product-image" />
        <div className="info">
          <h6 className="product-name">Men's T-shirt</h6>
          <p className="product-description">Men's top class shirt...</p>
        </div>
      </div>
    </td>
    <td>Men</td>
    <td>NetPlay</td>
    <td>
      <del className="old-price">₹1000</del><br />
      <span className="new-price">₹999</span>
    </td>
    <td>100</td>
    <td><MdStarRate className="good-rating" /> 4.5</td>
    <td>380</td>
    <td>38k</td>
    <td>
    <div className="actions d-flex align-items-center">
    <Button color="secondary"><FaEye /></Button>
        <Button color="success"><IoPencilSharp /></Button>
        <Button color="danger"><MdDelete /></Button>
      </div>
    </td>
  </tr>
  <tr>
    <td>#1</td>
    <td>
      <div className="d-flex product-info">
        <img src="/logo1.png" alt="Product" className="product-image" />
        <div className="info">
          <h6 className="product-name">Men's T-shirt</h6>
          <p className="product-description">Men's top class shirt...</p>
        </div>
      </div>
    </td>
    <td>Men</td>
    <td>NetPlay</td>
    <td>
      <del className="old-price">₹1000</del><br />
      <span className="new-price">₹999</span>
    </td>
    <td>100</td>
    <td><MdStarRate className="good-rating" /> 4.5</td>
    <td>380</td>
    <td>38k</td>
    <td>
    <div className="actions d-flex align-items-center">
    <Button color="secondary"><FaEye /></Button>
        <Button color="success"><IoPencilSharp /></Button>
        <Button color="danger"><MdDelete /></Button>
      </div>
    </td>
  </tr>
  <tr>
    <td>#1</td>
    <td>
      <div className="d-flex product-info">
        <img src="/logo1.png" alt="Product" className="product-image" />
        <div className="info">
          <h6 className="product-name">Men's T-shirt</h6>
          <p className="product-description">Men's top class shirt...</p>
        </div>
      </div>
    </td>
    <td>Men</td>
    <td>NetPlay</td>
    <td>
      <del className="old-price">₹1000</del><br />
      <span className="new-price">₹999</span>
    </td>
    <td>100</td>
    <td><MdStarRate className="good-rating" /> 4.5</td>
    <td>380</td>
    <td>38k</td>
    <td>
    <div className="actions d-flex align-items-center">
    <Button color="secondary"><FaEye /></Button>
        <Button color="success"><IoPencilSharp /></Button>
        <Button color="danger"><MdDelete /></Button>
      </div>
    </td>
  </tr>
  <tr>
    <td>#1</td>
    <td>
      <div className="d-flex product-info">
        <img src="/logo1.png" alt="Product" className="product-image" />
        <div className="info">
          <h6 className="product-name">Men's T-shirt</h6>
          <p className="product-description">Men's top class shirt...</p>
        </div>
      </div>
    </td>
    <td>Men</td>
    <td>NetPlay</td>
    <td>
      <del className="old-price">₹1000</del><br />
      <span className="new-price">₹999</span>
    </td>
    <td>100</td>
    <td><MdStarRate className="good-rating" /> 4.5</td>
    <td>380</td>
    <td>38k</td>
    <td>
    <div className="actions d-flex align-items-center">
    <Button color="secondary"><FaEye /></Button>
        <Button color="success"><IoPencilSharp /></Button>
        <Button color="danger"><MdDelete /></Button>
      </div>
    </td>
  </tr>
  <tr>
    <td>#1</td>
    <td>
      <div className="d-flex product-info">
        <img src="/logo1.png" alt="Product" className="product-image" />
        <div className="info">
          <h6 className="product-name">Men's T-shirt</h6>
          <p className="product-description">Men's top class shirt...</p>
        </div>
      </div>
    </td>
    <td>Men</td>
    <td>NetPlay</td>
    <td>
      <del className="old-price">₹1000</del><br />
      <span className="new-price">₹999</span>
    </td>
    <td>100</td>
    <td><MdStarRate className="good-rating" /> 4.5</td>
    <td>380</td>
    <td>38k</td>
    <td>
    <div className="actions d-flex align-items-center">
    <Button color="secondary"><FaEye /></Button>
        <Button color="success"><IoPencilSharp /></Button>
        <Button color="danger"><MdDelete /></Button>
      </div>
    </td>
  </tr>
</tbody>

            </table>

            <div className="d-flex tableFooter">
              <p>showing <b> 12 </b> of <b> 60 </b> resultes </p>
            <Pagination count={10} color="primary" className="Pagination"  showFirstButton showLastButton/>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
