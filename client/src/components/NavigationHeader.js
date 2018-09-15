import React, {Component} from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem } from 'reactstrap'

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
				<Navbar color={'light'} light expand={'md'} >
					<NavbarBrand href={'/'}>HomeFax</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav>
							<NavItem>
								<NavLink href={'/Login'}>Login</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href={'/Register'} >Register</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href={'/Details'}>Details</NavLink>
							</NavItem>
							<UncontrolledDropdown nav inNavBar>
								<DropdownToggle nav caret>
									Options
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>
										Option 1
									</DropdownItem>
									<DropdownItem>
										Option 2
									</DropdownItem>
									<DropdownItem divider>
										Reset
									</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}

export default NavigationHeader;