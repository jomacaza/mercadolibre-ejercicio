import React from "react";
import PropTypes from "prop-types";

function breadcrumb({ ...props }) {
  const { items } = props;
  const links = items.map(item => {
    return (
      <div className="breadcrumb-item">
        <a href={`#/items?search=${item.name}`}>{item.name}</a>
        <span>></span>
      </div>
    );
  });

  return <div className="breadcrumb">{links}</div>;
}

breadcrumb.defaultProps = {
  items: []
};

breadcrumb.propTypes = {
  items: PropTypes.array
};

export default breadcrumb;
