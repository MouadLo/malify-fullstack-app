import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import { fetchProduct, deleteProduct } from '../../actions';

class ProductDelete extends Component {
	componentDidMount() {
		this.props.fetchProduct(this.props.match.params._id);
	}

	renderActions() {
		const { _id } = this.props.match.params;
		return (
			<>
				<button
					onClick={() => this.props.deleteProduct(_id, this.props.history)}
					className="ui button red"
				>
					Delete
				</button>
				<Link to={`/products/${_id}`} className="ui button">
					Cancel
				</Link>
			</>
		);
	}

	renderContent() {
		if (!this.props.product) {
			return 'Are you sure you want to delete this product ';
		}

		return `Are you sure you want to delete this product with title:  ${this.props.product.title}`;
	}
	render() {
		return (
			<div>
				<Modal
					title="Delete Product"
					content={this.renderContent()}
					actions={this.renderActions()}
					onDismiss={() =>
						this.props.history.push(`/products/${this.props.match.params._id}`)
					}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		product: state.products[ownProps.match.params._id],
	};
};

export default connect(mapStateToProps, { fetchProduct, deleteProduct })(
	ProductDelete
);
