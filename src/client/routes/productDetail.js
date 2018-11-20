import React, { Component } from "react";
import PropTypes from "prop-types";
import Detail from "../components/productDetail";
import Breadcrumb from "../components/breadcrumb";

class productDetail extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    const { id } = this.props.match.params;
    this._getProductDetail(id);
  }

  _getProductDetail(id) {
    fetch(`api/items/${id}`)
      .then(response => response.json())
      .then(response => {
        this.setState({ ...response });
      });
  }

  render() {
    const {
      picture,
      title,
      price = { amount: 0 },
      description = { plain_text: "" },
      condition,
      sold_quantity,
      categories
    } = this.state;

    return (
      <div>
        <Breadcrumb items={categories} />
        <div className="card">
          <Detail
            thumb={picture}
            title={title}
            price={price.amount}
            description={description.plain_text}
            condition={condition}
            soldQuantity={sold_quantity}
          />
        </div>
      </div>
    );
  }
}

export default productDetail;
