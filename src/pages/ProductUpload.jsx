import '../css/ProductUpload.css';
import React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


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
    
export const ProductUpload=()=>{
      return(
            <div className="right-content product-details-container w-100">
      <div className="product-card shadow border-0 w-100 flex-row p-4">
        <h5 className="product-title mb-0">Product Upload</h5>
        <div className="product-breadcrumbs-container">
          <Breadcrumbs aria-label="breadcrumb" className="product-breadcrumbs">
            <StyledBreadcrumb
              component="a"
              href="#"
              label="Home"
              icon={<HomeIcon fontSize="small" />}
            />
            <StyledBreadcrumb component="a" href="#" label="Products" />
            <StyledBreadcrumb label="Product Upload" deleteIcon={<ExpandMoreIcon />} />
          </Breadcrumbs>
        </div>

        
      </div>  
      <form className="product-upload-form w-100">
    <div className="product-upload-row row">
        <div className="product-upload-col-main col-sm-7">
            <div className="product-upload-card card">
                <h5 className="product-upload-title mb-4">Basic Information</h5> 
                <div className="product-upload-form-group">
                    <h6 className="product-upload-label">Title</h6>
                    <input type="text" className="product-upload-input" />
                </div>
                <div className="product-upload-form-group">
                    <h6 className="product-upload-label">Description</h6>
                    <textarea rows={5} cols={10} className="product-upload-textarea"></textarea>
                </div>
            </div>
        </div>
        <div className="product-upload-col-side col-sm-5">
            {/* Additional content can go here */}
        </div>
    </div> 
</form>

    </div>
      );
};