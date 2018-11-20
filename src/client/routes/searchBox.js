import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchBox from "../components/searchBox";

const logo = require("../assets/Logo_ML.png");

class searchBox extends Component {
  statisearchBoxes = {
    children: PropTypes.node,
    className: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {
      search: ""
    };
  }

  _handlerSearchChange(e) {
    const { value } = e.target;
    this.setState({ search: value });
  }

  _onSubmit() {
    this.props.history.push(`/items?search=${this.state.search}`);
  }

  render() {
    return (
      <header className="header">
        <div className="container">
          <a href="#/">
            <img className="logo" src={logo} alt="logo" />
          </a>

          <SearchBox
            onChange={this._handlerSearchChange.bind(this)}
            onSubmit={this._onSubmit.bind(this)}
          />
        </div>
      </header>
    );
  }
}

export default searchBox;
