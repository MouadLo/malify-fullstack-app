// ProductFormReview shows users their form inputs for review
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

class ProductFormReview extends Component {
	state = {
		file: null,
		loading: false,
	};

	renderFields() {
		const { formValues } = this.props;

		// return _.map(formFields, ({ name, label }) => {
		// 	return (
		// 		<div className={`col ${col}`} key={name}>
		// 			<label>{label}</label>
		// 			<div>{formValues[name]}</div>
		// 		</div>
		// 	);
		// });
		const { title, price, tva, _id, collections, vendor, barcode } = formValues;
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
			</div>
		);
	}

	renderButtons() {
		const { onCancel } = this.props;

		return (
			<div>
				<button className="ui labeled icon negative button" onClick={onCancel}>
					<i className="left arrow icon"></i>
					Back
				</button>
				{!this.state.loading ? (
					<button className="ui labeled icon positive  button right">
						Save
						<i className="save icon"></i>
					</button>
				) : (
					<button className="ui labeled icon positive  button right">
						Loading
						<i className="save icon"></i>
					</button>
				)}
			</div>
		);
	}

	onSubmit = async (event) => {
		event.preventDefault();
		this.setState({ loading: true });
		const { submitProduct, history, formValues } = this.props;

		await this.props.onSubmit(formValues, this.state.file, history);
		this.setState({ loading: false });
	};

	onFileChange(event) {
		this.setState({ file: event.target.files[0] });
	}

	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<h5>Please confirm your entries</h5>
				<div className="row" style={{ marginBottom: 20 }}>
					{this.renderFields()}
				</div>

				{/* <h5>Add An Image</h5>
        <input
          onChange={this.onFileChange.bind(this)}
          type="file"
          accept="image/*"
        /> */}

				{this.renderButtons()}
			</form>
		);
	}
}

function mapStateToProps(state) {
	return { formValues: state.form.productForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(ProductFormReview));
