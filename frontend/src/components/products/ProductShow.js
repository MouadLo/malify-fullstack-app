import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProduct } from '../../actions';

class ProductShow extends Component {
	componentDidMount() {
		this.props.fetchProduct(this.props.match.params._id);
	}

	renderImage() {
		if (this.props.product.imageUrl) {
			return (
				<img
					src={
						'https://s3-us-east-1.amazonaws.com/react-redux-product-sfxsd/' +
						this.props.product.imageUrl
					}
				/>
			);
		}
	}

	render() {
		if (!this.props.product) {
			return '';
		}

		const {
			title,
			price,
			tva,
			_id,
			collections,
			vendor,
			barcode,
		} = this.props.product;

		return (
			<div>
				<h5 className="ui horizontal divider header">{title}</h5>
				<h4 className="ui horizontal divider header">
					<i className="bar chart icon"></i>
					Specifications
				</h4>
				<table className="ui definition table">
					<tbody>
						<tr>
							<td className="two wide column">Collections</td>
							<td>{collections}</td>
						</tr>
						<tr>
							<td>Vendor</td>
							<td>{vendor}</td>
						</tr>
						<tr>
							<td>Price</td>
							<td>{price}</td>
						</tr>
						<tr>
							<td>TVA</td>
							<td>{tva}</td>
						</tr>
						<tr>
							<td>Bar Code</td>
							<td>{barcode}</td>
						</tr>
					</tbody>
				</table>
				<Link tabIndex="0" to="/products" className="ui labeled icon  button">
					<i className="left arrow icon"></i>
					Cancel
				</Link>
				<Link
					style={{ marginTop: '30px' }}
					className="ui labeled icon positive  button right"
					to={`/products/edit/${_id}`}
				>
					Edit Product <i className="edit icon"></i>
				</Link>
				<Link
					style={{ marginTop: '30px' }}
					className="ui labeled icon negative button right"
					to={`/products/delete/${_id}`}
				>
					Delete Product <i className="delete icon"></i>
				</Link>
				{this.renderImage()}
			</div>
		);
	}
}

function mapStateToProps({ products }, ownProps) {
	return { product: products[ownProps.match.params._id] };
}

export default connect(mapStateToProps, { fetchProduct })(ProductShow);
