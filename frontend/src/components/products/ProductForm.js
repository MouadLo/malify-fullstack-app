// ProductForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import InputField from './InputField';
import SelectField from './SelectField';
import formFields from './formFields';

const {} = React;

class ProductForm extends Component {
	renderFields() {
		return (
			<div className="field">
				<div style={{ marginRight: '50px' }} className="seven  field">
					<div className="field">
						<Field
							key={_.find(formFields, ['name', 'title']).name}
							component={InputField}
							type="text"
							placeholder="Title"
							label={_.find(formFields, ['name', 'title']).label}
							name={_.find(formFields, ['name', 'title']).name}
						/>
					</div>
					<div className="field">
						<Field
							key={_.find(formFields, ['name', 'collections']).name}
							component={SelectField}
							type="select-multi"
							label={_.find(formFields, ['name', 'collections']).label}
							name={_.find(formFields, ['name', 'collections']).name}
						>
							<option></option>
							<option name="AF">Accessories</option>
							<option name="AX">Chairs</option>
							<option name="AL">Shoes</option>
							<option name="DZ">CASQUETTES</option>
							<option name="AS">COLS MULTIFONCTIONNELS</option>
							<option name="AD">COUSSINS</option>
							<option name="AO">ALOHA TO ZEN</option>
						</Field>
					</div>
					<div className="fields">
						<div className="eight wide field">
							<Field
								key={_.find(formFields, ['name', 'price']).name}
								component={InputField}
								type="number"
								min="10"
								max="100"
								maxlength="3"
								label={_.find(formFields, ['name', 'price']).label}
								name={_.find(formFields, ['name', 'price']).name}
							/>
						</div>
						<div className="eight wide field">
							<Field
								key={_.find(formFields, ['name', 'tva']).name}
								component={InputField}
								type="number"
								min="10"
								max="100"
								maxlength="3"
								label={_.find(formFields, ['name', 'tva']).label}
								name={_.find(formFields, ['name', 'tva']).name}
							/>
						</div>
					</div>

					<div className="field">
						<Field
							key={_.find(formFields, ['name', 'vendor']).name}
							component={InputField}
							type="text"
							label={_.find(formFields, ['name', 'vendor']).label}
							name={_.find(formFields, ['name', 'vendor']).name}
						/>
					</div>

					<div className="field">
						<Field
							key={_.find(formFields, ['name', 'barcode']).name}
							component={InputField}
							type="text"
							label={_.find(formFields, ['name', 'barcode']).label}
							name={_.find(formFields, ['name', 'barcode']).name}
						/>
					</div>
				</div>
			</div>
		);
	}

	render() {
		return (
			<div style={{ marginTop: 10, marginBottom: 100 }}>
				<form
					className="ui small form"
					onSubmit={this.props.handleSubmit(this.props.onProductSubmit)}
				>
					<h4 className="ui dividing header">New Product</h4>
					{this.renderFields()}

					<Link
						tabIndex="0"
						to="/products"
						className="ui labeled icon negative button"
					>
						<i className="left arrow icon"></i>
						Cancel
					</Link>
					<button
						type="submit"
						tabIndex="0"
						className="ui labeled icon positive  button right"
					>
						Next
						<i className="right arrow icon"></i>
					</button>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	// _.each(formFields, ({ name }) => {
	// 	if (name === 'price' && isNaN(names[name])) {
	// 		errors[name] = 'You must provide a valide price';
	// 	}
	// 	if (!names[name]) {
	// 		errors[name] = 'You must provide a value';
	// 	}
	// });

	if (!values.title) {
		errors.title = 'Title required';
	} else if (values.title.length > 150) {
		errors.title = 'Must be 15 characters or less';
	}

	if (!values.collections) {
		errors.collections = 'Collections required';
	} else if (values.collections > 20) {
		errors.collections = 'Must be 20 characters or less';
	}

	if (!values.supplier) {
		errors.supplier = 'Supplier required';
	} else if (values.supplier > 50) {
		errors.supplier = 'Must be 20 characters or less';
	}

	if (!values.price) {
		errors.price = 'Price required';
	} else if (isNaN(Number(values.price))) {
		errors.price = 'Must be a number';
	}

	if (Number(values.tva) > 100) {
		errors.tva = 'TVA less than 100 %';
	}
	return errors;
}

export default reduxForm({
	validate,
	form: 'productForm',
	destroyOnUnmount: false,
})(ProductForm);
