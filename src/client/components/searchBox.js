import React from 'react';
import PropTypes from 'prop-types';

const iconSearch = require('../assets/ic_Search.png');

function searchBox({...props}) {
	const { onChange, onSubmit } = props;

	return (
		<div className="search-box">
			<input type="text" placeholder="Nunca dejes de buscar" onChange={onChange}/>
			<button className="btn" onClick={onSubmit}>
				<img src={iconSearch} alt="search icon" />
			</button>
		</div>
	);
}

searchBox.defaultProps = {};

searchBox.propTypes = {
	onChange: PropTypes.func,
	onSubmit: PropTypes.func,
};

export default searchBox;
