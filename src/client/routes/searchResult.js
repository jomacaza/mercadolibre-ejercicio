import React, { Component } from "react";
import PropTypes from "prop-types";
import Product from "../components/product";

const iconShipping = require("../assets/ic_shipping@2x.png");

class searchResult extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div class="breadcrumb">test 1 > test 2</div>
        <div className="card">
          <div className="product-list">
            <Product
              price={1.98}
              description="Apple Ipod Touch 5g 16gb Negro Igual a Nuevo"
              location="Capital Federal"
              thumb="https://i.ytimg.com/vi/RW5a6D-O-i8/maxresdefault.jpg"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default searchResult;
