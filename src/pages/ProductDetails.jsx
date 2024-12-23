import React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FaTags, FaPalette, FaRuler, FaDollarSign, FaBoxOpen, FaCalendarAlt } from 'react-icons/fa';
import '../css/ProductDetails.css';

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

export const ProductDetails = () => {
  return (
    <div className="right-content product-details-container w-100">
      {/* Breadcrumbs Section */}
      <div className="product-card shadow border-0 w-100 flex-row p-4">
        <h5 className="product-title mb-0">Product List</h5>
        <div className="product-breadcrumbs-container">
          <Breadcrumbs aria-label="breadcrumb" className="product-breadcrumbs">
            <StyledBreadcrumb
              component="a"
              href="#"
              label="Dashboard"
              icon={<HomeIcon fontSize="small" />}
            />
            <StyledBreadcrumb component="a" href="#" label="Products" />
            <StyledBreadcrumb label="Product View" deleteIcon={<ExpandMoreIcon />} />
          </Breadcrumbs>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="card w-100">
        <div className="row">
          <div className="col-md-6">
            {/* Product Gallery */}
            <div className="product-gallery">
              <img src="/logo.png" alt="Main Product" className="main-image" />
              <div className="thumbnail-gallery">
                <img src="/admin.png" alt="Thumbnail 1" />
                <img src="/admin.png" alt="Thumbnail 2" />
                <img src="/admin.png" alt="Thumbnail 3" />
                <img src="/admin.png" alt="Thumbnail 4" />
              </div>
            </div>
          </div>

          <div className="col-md-6">
  {/* Product Info */}
  <div className="product-info-section">
    <h2 className="product-info-section__title">Formal suits for men wedding slim fit 3 piece dress business party jacket</h2>
    <ul className="product-info-section__attributes">
      <li className="product-info-section__attribute-item">
        <FaTags className="product-info-section__icon" /> <strong>Brand:</strong> Ecstasy
      </li>
      <li className="product-info-section__attribute-item">
        <FaTags className="product-info-section__icon" /> <strong>Category:</strong> Men's
      </li>
      <li className="product-info-section__attribute-item">
        <FaTags className="product-info-section__icon" /> <strong>Tags:</strong> Suit, Party, Dress, Smart
      </li>
      <li className="product-info-section__attribute-item">
        <FaPalette className="product-info-section__icon" /> <strong>Color:</strong> Red, Blue, White
      </li>
      <li className="product-info-section__attribute-item">
        <FaRuler className="product-info-section__icon" /> <strong>Size:</strong> 68 Piece
      </li>
      <li className="product-info-section__attribute-item">
        <FaDollarSign className="product-info-section__icon" /> <strong>Price:</strong> $199
      </li>
      <li className="product-info-section__attribute-item">
        <FaBoxOpen className="product-info-section__icon" /> <strong>Stock:</strong> Available
      </li>
      <li className="product-info-section__attribute-item">
        <FaCalendarAlt className="product-info-section__icon" /> <strong>Added on:</strong> 02 Feb 2020
      </li>
    </ul>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};
