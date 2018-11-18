import React, { Component } from "react";
import PropTypes from "prop-types";
import Product from "../components/productItem";
import queryString from "query-string";

const iconShipping = require("../assets/ic_shipping@2x.png");

class searchResult extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {
      result: {
        items: []
      }
    };
  }

  componentWillMount() {
    this._getProducts(this.props.location.search);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.search !== this.props.location.search) {
      this._getProducts(nextProps.location.search);
    }
  }

  _getProducts(params) {
    const { search } = queryString.parse(params);

    fetch(`api/items?search=${search}`)
      .then(response => response.json())
      .then(response => {
        this.setState({ result: response });
      });
  }

  render() {
    const products = this.state.result.items.map((product, key) => {
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

    console.log(this.state.result);

    return (
      <div>
        <div className="breadcrumb">test 1 > test 2</div>
        <div className="card">
          <div className="product-list">{products}</div>
        </div>
      </div>
    );
  }
}

export default searchResult;
