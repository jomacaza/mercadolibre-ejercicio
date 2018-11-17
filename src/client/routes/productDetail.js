import React, { Component } from "react";
import PropTypes from "prop-types";
import Detail from "../components/productDetail";

class productDetail extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {
      title: "Deco Reverse Sombrero Oxford",
      description: `
                  Dolor recusandae dolores facere corporis eaque! Voluptas fuga
                  impedit ea suscipit odit Modi illo quibusdam officiis nobis
                  aspernatur ea? Veniam placeat ipsa quibusdam aspernatur omnis
                  exercitationem? Voluptates reprehenderit saepe possimus.
				`,
      price: 1980,
      thumb: "https://i.ytimg.com/vi/RW5a6D-O-i8/maxresdefault.jpg"
    };
  }

  render() {
    const { thumb, title, price, description } = this.state;

    return (
      <div>
        <div className="breadcrumb">test 1 > test 2</div>
        <div className="card">
          <Detail
            thumb={thumb}
            title={title}
            price={price}
            description={description}
          />
        </div>
      </div>
    );
  }
}

export default productDetail;
