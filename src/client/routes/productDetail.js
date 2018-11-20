import React, { Component } from "react";
import PropTypes from "prop-types";
import Detail from "../components/productDetail";
import Breadcrumb from "../components/breadcrumb";
import Spinner from "../components/spinner";
import { author } from "../constants";

class productDetail extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {
      pending: false
    };
  }

  componentWillMount() {
    const { id } = this.props.match.params;
    this._getProductDetail(id);
  }

  _getProductDetail(id) {
    this.setState({ pending: true });

    fetch(`api/items/${id}`, {
      headers: { author: JSON.stringify(author) }
    })
      .then(response => response.json())
      .then(response => {
        this.setState({ ...response.item, pending: false });
      })
      .catch(reject => {
        console.log(reject);
        this.setState({ pending: false });
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
      categories,
      pending
    } = this.state;

    return (
      <div>
        <Breadcrumb items={categories} />
        <div className="card product-container">
          {pending ? (
            <Spinner />
          ) : (
            <Detail
              thumb={picture}
              title={title}
              price={price.amount}
              description={description.plain_text}
              condition={condition}
              soldQuantity={sold_quantity}
            />
          )}
        </div>
      </div>
    );
  }
}

export default productDetail;
