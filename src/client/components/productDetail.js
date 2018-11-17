import React from "react";
import PropTypes from "prop-types";

function productDetail({ ...props }) {
  const { thumb, title, price, description } = props;

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
          <div className="product-detail-label">Nuevo - 234 vendidos</div>
          <div className="product-detail-title">{title}</div>
          <div className="product-detail-price">$ {price}</div>
          <button type="button" className="btn btn-primary">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}

productDetail.defaultProps = {
  price: 0
};

productDetail.propTypes = {
  price: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  thumb: PropTypes.string
};

export default productDetail;
