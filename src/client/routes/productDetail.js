import React, { Component} from 'react';
import PropTypes from 'prop-types';

class productDetail extends Component {
	static propTypes = {
		children: PropTypes.node,
		className: PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1>Product Detail</h1>
			</div>
		);
	}
}

export default productDetail;
