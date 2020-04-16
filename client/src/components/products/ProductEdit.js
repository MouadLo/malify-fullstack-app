// ProductNew shows ProductForm and ProductFormReview
import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { fetchProduct, editProduct } from '../../actions/';
import ProductForm from './ProductForm';
import ProductFormReview from './ProductFormReview';

class ProductEdit extends Component {
	state = { showFormReview: false };

	componentDidMount() {
		this.props.fetchProduct(this.props.match.params._id);
	}
	onSubmit = (formValues, file, history) => {
		this.props.editProduct(this.props.match.params._id, formValues, history);
	};
	renderContent() {
		if (this.state.showFormReview) {
			return (
				<ProductFormReview
					onSubmit={this.onSubmit}
					onCancel={() => this.setState({ showFormReview: false })}
				/>
			);
		}
		return (
			<ProductForm
				initialValues={_.pick(
					this.props.product,
					'title',
					'price',
					'collections',
					'tva',
					'barcode',
					'vendor'
				)}
				onProductSubmit={() => this.setState({ showFormReview: true })}
			/>
		);
	}

	render() {
		return <div>{this.renderContent()}</div>;
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		product: state.products[ownProps.match.params._id],
	};
};

const formWrapped = reduxForm({
	form: 'productForm',
})(ProductEdit);

export default connect(mapStateToProps, { fetchProduct, editProduct })(
	formWrapped
);
