import React from "react";
import PropTypes from "prop-types";

const iconShipping = require("../assets/ic_shipping@2x.png");

function product({ ...props }) {
  const { price, location, description, thumb } = props;
  const thumbStyle = {
    backgroundImage: `url(${thumb})`,
    backgroundSize: "cover"
  };

  return (
    <div className="product">
      <div className="thumbnail" style={thumbStyle} />
      <div class="product-info">
        <div class="product-header row">
          <div className="col-9">
            <div className="product-title">$ {price}</div>
            <img
              src={iconShipping}
              className="icon-shipping"
              alt="shipping icon"
            />
          </div>
          <div class="col-3">
            <div class="product-location">{location}</div>
          </div>
        </div>
        <div className="product-description">{description}</div>
      </div>
    </div>
  );
}

product.defaultProps = {
  price: 0
};

product.propTypes = {
  price: PropTypes.number,
  location: PropTypes.string,
  description: PropTypes.string
};

export default product;
