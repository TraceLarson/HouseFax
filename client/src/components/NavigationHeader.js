import React, {Component} from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink } from 'reactstrap';

class NavigationHeader extends Component {
	state = {
		isOpen: false
	}

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	render() {
		return (
			<div>
				<Navbar color="light" light expand="md">
					<NavbarBrand href="/">HomeFax</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="/Login">Login</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/">About</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/">Contact</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}

export default NavigationHeader;