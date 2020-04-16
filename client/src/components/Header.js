import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import StripeBilling from './StripeBilling';

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<a className="item" href="/auth/google">
						Login With Google
					</a>
				);
			default:
				return [
					<StripeBilling key="1" className="item" />,
					<div key="2" style={{ margin: '0 10px' }} className="item">
						Credits: {this.props.auth.credits}
					</div>,
					<a key="4" className="ui item" href="/api/logout">
						Logout
					</a>,
				];
		}
	}

	render() {
		return (
			<div className="ui blue pointing menu">
				<Link to={this.props.auth ? '/products' : '/'} className="item">
					Home
				</Link>
				<Link className="item" key="3" to="/products">
					Products
				</Link>
				<div className="right menu">{this.renderContent()}</div>
			</div>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);
