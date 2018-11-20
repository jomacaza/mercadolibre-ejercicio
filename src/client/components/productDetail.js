import React from "react";
import PropTypes from "prop-types";
import { thousandsSeparator } from "../utilities";

function productDetail({ ...props }) {
  const { thumb, title, price, description, condition, soldQuantity } = props;
  const conditions = {
    used: "Usado",
    new: "Nuevo"
  };
  const split_price = price.toString().split(".");
  const priceWithSeparator = thousandsSeparator(split_price[0]);

  return (
    <div className="product-detail">
      <div className="row">
        <div className="col-9">
          <img src={thumb} className="thumbnail" alt="product figure" />
          <h3 className="product-detail-description-label">
            Descripción de Producto
          </h3>
          <p className="product-detail-description">{description}</p>
        </div>
        <div className="col-3">
          <div className="product-detail-label">
            {conditions[condition]} - {soldQuantity} vendidos
          </div>
          <div className="product-detail-title">{title}</div>
          <div className="product-detail-price">
            <span>$ {priceWithSeparator}</span>
            <span className="product-detail-price-decimal">
              {split_price[1]}
            </span>
          </div>
          <button type="button" className="btn btn-primary">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}

productDetail.defaultProps = {
  price: 0,
  soldCuantity: 0
};

productDetail.propTypes = {
  price: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  thumb: PropTypes.string,
  condition: PropTypes.string,
  soldQuantity: PropTypes.number
};

export default productDetail;
