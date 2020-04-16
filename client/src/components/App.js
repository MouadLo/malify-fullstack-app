import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import ProductNew from './products/ProductNew';
import ProductShow from './products/ProductShow';
import ProductEdit from './products/ProductEdit';
import ProductDelete from './products/ProductDelete';

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<div className="ui container">
				<BrowserRouter>
					<div>
						<Header />
						<Switch>
							<Route path="/products/new" component={ProductNew} />
							<Route path="/products/edit/:_id" component={ProductEdit} />
							<Route path="/products/delete/:_id" component={ProductDelete} />
							<Route exact path="/products/:_id" component={ProductShow} />
							<Route path="/products" component={Dashboard} />
							<Route path="/" component={Landing} />
						</Switch>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, actions)(App);
