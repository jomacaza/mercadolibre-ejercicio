import React, { Component } from "react";
import PropTypes from "prop-types";
import queryString from "query-string";
import ProductList from "../components/productList";
import Breadcrumb from "../components/breadcrumb";
import Spinner from "../components/spinner";
import { author } from "../constants";

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
      },
      pending: false
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

    this.setState({ pending: true });

    fetch(`api/items?search=${search}`, {
      headers: { author: JSON.stringify(author) }
    })
      .then(response => response.json())
      .then(response => {
        this.setState({ result: response, pending: false });
      })
      .catch(reject => {
        console.log(reject);
        this.setState({ pending: false });
      });
  }

  render() {
    const { items, categories } = this.state.result;
    const { pending } = this.state;

    return (
      <div>
        <Breadcrumb items={categories} />
        <div className="card product-container">
          {pending ? <Spinner /> : <ProductList items={items} />}
        </div>
      </div>
    );
  }
}

export default searchResult;
