import React from "react";
import PropTypes from "prop-types";
import Product from "../components/productItem";

function productList({ ...props }) {
  const { items } = props;
  const products = items.map((product, key) => {
    const { id, title, price, location, picture, free_shipping } = product;

    return (
      <Product
        key={`product-${key}`}
        id={id}
        price={price.amount}
        title={title}
        location={location}
        picture={picture}
        hasShipping={free_shipping}
      />
    );
  });

  return <div className="product-list">{products}</div>;
}

productList.defaultProps = {
  items: []
};

productList.propTypes = {
  items: PropTypes.array
};

export default productList;
