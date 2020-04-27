import React, { Component } from 'react';
import map from 'lodash/map';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../../actions';

class ProductList extends Component {
	componentDidMount() {
		this.props.fetchProducts();
	}

	renderProducts() {
		return map(this.props.products, (product, index) => {
			return (
				<tr key={index}>
					<td>
						<Link to={`/products/${product._id}`}>
							<>{product.title}</>
						</Link>
					</td>
					<td className="single line">{product.collections}</td>
					<td>{product.price}</td>
					<td>{product.tva}%</td>
					<td>{product.vendor}</td>
				</tr>
			);
		});
	}

	render() {
		return (
			<div>
				<table className="ui celled padded table">
					<thead>
						<tr>
							<th className="single line">Product Title</th>
							<th>Collections</th>
							<th>Price</th>
							<th>TVA</th>
							<th>Vendor</th>
						</tr>
					</thead>
					<tbody>{this.renderProducts()}</tbody>
				</table>
			</div>
		);
	}
}

function mapStateToProps({ products }) {
	return { products };
}

export default connect(mapStateToProps, { fetchProducts })(ProductList);
