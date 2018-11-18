import React, { Component } from "react";
import ReactImage from "./react.png";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import SearchBox from "./routes/searchBox";
import SearchResult from "./routes/searchResult";
import ProductDetail from "./routes/productDetail";

// styles
import "./styles/app.scss";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={SearchBox} />

          <div className="container">
            <Switch>
              <Route path="/items/:id" component={ProductDetail} />
              <Route path="/items" component={SearchResult} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
