import '../css/ProductList.css';
import React, { useState } from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuItem from '@mui/material/MenuItem';
import { Button } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { MdStarRate } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { IoPencilSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import Pagination from '@mui/material/Pagination';
import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart, FaLock } from 'react-icons/fa';



const StyledBreadcrumb = styled(Chip)(({ theme }) => {
      const backgroundColor =
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[800];
    
      return {
        backgroundColor,
        height: theme.spacing(3),
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        borderRadius: '12px',
        '&:hover, &:focus': {
          backgroundColor: emphasize(backgroundColor, 0.06),
        },
        '&:active': {
          boxShadow: theme.shadows[1],
          backgroundColor: emphasize(backgroundColor, 0.12),
        },
      };
    });
    

export const ProductList=()=>{
  const cardData = [
    { color: 'green', title: 'Total Users', value: 277, icon: <FaUser /> },
    { color: 'purple', title: 'Total Orders', value: 277, icon: <FaShoppingCart /> },
    { color: 'blue', title: 'Total Sales', value: 277, icon: <FaLock /> },
];
  const [showBy, setShowBy] = useState('');
  const [categoryBy, setCategoryBy] = useState('');
  const [brandBy, setBrandBy] = useState('');
  
  
  const handleChange = (event) => {
    setShowBy(event.target.value); 
  };

  const handleChange2 = (event) => {
    setCategoryBy(event.target.value); 
  };

  const handleChange3 = (event) => {
    setBrandBy(event.target.value); 
  };
      return(
        <div className="right-content product-details-container">
            <div className="product-card-unique shadow border-0 p-4">
        <h5 className="product-title-unique mb-0">Product List</h5>
        <div className="product-breadcrumbs-container-unique">
          <Breadcrumbs aria-label="breadcrumb" className="product-breadcrumbs-unique">
            <StyledBreadcrumb component="a" href="#" label="Home" icon={<HomeIcon fontSize="small" />} />
            <StyledBreadcrumb component="a" href="#" label="Products" />
            <StyledBreadcrumb label="Product List" deleteIcon={<ExpandMoreIcon />} />
          </Breadcrumbs>
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
   <Link to="/productdetails"><Button color="secondary"><FaEye /></Button> </Link>
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
      );
};