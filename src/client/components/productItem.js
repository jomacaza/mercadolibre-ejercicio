import React from "react";
import PropTypes from "prop-types";

const iconShipping = require("../assets/ic_shipping@2x.png");

function productItem({ ...props }) {
  const { id, price, location, title, picture, hasShipping } = props;
  const thumbStyle = {
    backgroundImage: `url(${picture})`,
    backgroundSize: "cover"
  };
  const shipping = hasShipping ? (
    <img src={iconShipping} className="icon-shipping" alt="shipping icon" />
  ) : null;

  return (
    <div className="product">
      <div className="thumbnail" style={thumbStyle} />
      <div class="product-info">
        <div class="product-header row">
          <div className="col-9">
            <div className="product-price">$ {price}</div>
            {shipping}
          </div>
          <div class="col-3">
            <div class="product-location">{location}</div>
          </div>
        </div>
        <a className="product-title" href={`#/items/${id}`}>
          {title}
        </a>
      </div>
    </div>
  );
}

productItem.defaultProps = {
  price: 0
};

productItem.propTypes = {
  id: PropTypes.string,
  price: PropTypes.number,
  location: PropTypes.string,
  title: PropTypes.string,
  picture: PropTypes.string,
  hasShipping: PropTypes.bool
};

export default productItem;
