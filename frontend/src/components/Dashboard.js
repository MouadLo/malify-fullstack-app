import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ProductList from './products/ProductList';

const Dashboard = (props) => {
	return (
		<div>
			<ProductList />

			{!props.auth ? (
				<></>
			) : (
				<Link
					style={{ marginTop: '30px' }}
					className="blue fluid ui button"
					to="/products/new"
				>
					New Product <i className="plus icon"></i>
				</Link>
			)}
		</div>
	);
};

const mapStateToProps = ({ auth }) => {
	return { auth };
};
export default connect(mapStateToProps)(Dashboard);
