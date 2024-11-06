import '../css/ProductUpload.css';
import React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Rating from '@mui/material/Rating';
import { FaCloudUploadAlt } from "react-icons/fa";
import Button from '@mui/material/Button';

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

export const ProductUpload = () => {
  const [value, setValue] = React.useState(2);
  const [categoryVal, setCategoryVal] = React.useState('');

  const handleChangeCategory = (event) => {
    setCategoryVal(event.target.value);
  };

  return (
    <div className="right-content product-details-container w-100">
      <div className="product-card-unique shadow border-0 w-100 p-4 ">
        <h5 className="product-title-unique mb-0">Product Upload</h5>
        <div className="product-breadcrumbs-container-unique">
          <Breadcrumbs aria-label="breadcrumb" className="product-breadcrumbs-unique">
            <StyledBreadcrumb component="a" href="#" label="Home" icon={<HomeIcon fontSize="small" />} />
            <StyledBreadcrumb component="a" href="#" label="Products" />
            <StyledBreadcrumb label="Product Upload" deleteIcon={<ExpandMoreIcon />} />
          </Breadcrumbs>
        </div>
      </div>

      <form className="product-upload-form w-100">
        <div className="row">
          <div className="col-md-7">
            <div className="product-upload-card card p-4 mb-4">
              <h5 className="product-upload-title mb-4">Basic Information</h5>

              <div className="product-upload-form-group mb-3">
                <h6 className="product-upload-label">Title</h6>
                <input type="text" className="product-upload-input" />
              </div>

              <div className="product-upload-form-group mb-3">
                <h6 className="product-upload-label">Description</h6>
                <textarea rows={5} cols={10} className="product-upload-textarea"></textarea>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <h6 className="product-upload-label">Category</h6>
                  <Select
                    value={categoryVal}
                    onChange={handleChangeCategory}
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
                </div>

                <div className="col">
                  <h6 className="product-upload-label">Brand</h6>
                  <Select
                    value={categoryVal}
                    onChange={handleChangeCategory}
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
                </div>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <h6 className="product-upload-label">Regular Price</h6>
                  <input type="text" className="product-upload-input" />
                </div>
                <div className="col">
                  <h6 className="product-upload-label">Discount Price</h6>
                  <input type="text" className="product-upload-input" />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <h6 className="product-upload-label">Ratings</h6>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </div>
                <div className="col">
                  <h6 className="product-upload-label">Product Stock</h6>
                  <input type="text" className="product-upload-input" />
                </div>
              </div>
              <div className="text-center mt-4">
                <Button
                  variant="contained"
                  className="btn-publish4"
                  startIcon={<FaCloudUploadAlt />}
                  size="large"
                >
                  Publish and View
                </Button>
              </div>
            </div>
          </div>

          <div className="col-md-5">
            {/* Additional content or form elements can be added here */}
          </div>
        </div>
      </form>
    </div>
  );
};
