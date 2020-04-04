import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<nav>
				<div className="nav-wrapper light-blue darken-4">
					<a className="right brand-logo">Logo</a>
					<ul className="left">
						<li>
							<a>Login With Google</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Header;
