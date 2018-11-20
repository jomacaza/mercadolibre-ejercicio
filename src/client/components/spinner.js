import React from "react";
import PropTypes from "prop-types";

function spinner({ ...props }) {
  const { color, width, height } = props;
  const spinnerStyle = {
    fill: color
  };

  return (
    <svg
      style={{ ...spinnerStyle, enableBackground: "new 0 0 50 50" }}
      version="1.1"
      id="loader-1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={width}
      height={height}
      viewBox="0 0 50 50"
    >
      <path
        style={spinnerStyle}
        fill="#000"
        d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
      >
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="rotate"
          from="0 25 25"
          to="360 25 25"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
}

spinner.defaultProps = {
  color: "#999",
  width: 50,
  height: 50
};

spinner.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

export default spinner;
