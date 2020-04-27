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
					<Link key="0" className="item" key="3" to="/products">
						Products
					</Link>,
					<div
						key="2"
						style={{ margin: '0 10px' }}
						className="orange item active"
					>
						{this.props.auth.displayName} Your Credits:{' '}
						{this.props.auth.credits}
					</div>,
					<StripeBilling key="1" className="item" />,
					<a key="4" className="ui item" href="/api/logout">
						Logout
					</a>,
				];
		}
	}

	render() {
		return (
			<div className="ui blue inverted menu">
				<Link
					to={this.props.auth ? '/products' : '/'}
					className="item active brand-logo"
				>
					Emaily
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
