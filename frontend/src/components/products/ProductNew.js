// ProductNew shows ProductForm and ProductFormReview
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { fetchProduct, submitProduct } from '../../actions/';
import ProductForm from './ProductForm';
import ProductFormReview from './ProductFormReview';

class ProductNew extends Component {
	state = { showFormReview: false };

	onSubmit = (formValues, file, history) => {
		this.props.submitProduct(formValues, file, history);
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
				onProductSubmit={() => this.setState({ showFormReview: true })}
			/>
		);
	}

	render() {
		return <div>{this.renderContent()}</div>;
	}
}

const formWrapped = reduxForm({
	form: 'productForm',
})(ProductNew);

export default connect(null, { fetchProduct, submitProduct })(formWrapped);
