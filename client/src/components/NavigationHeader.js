import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {logoutUser} from '../actions/authentication'
import {withRouter} from 'react-router-dom'
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink } from 'reactstrap';

import '../App.css'

class NavigationHeader extends Component {
	state = {
		isOpen: false
	}

	onLogout = e => {
		e.preventDefault()
		this.props.logoutUser(this.props.history)
	}

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	render() {
		const {isAuthenticated, user} = this.props.auth
		const authLinks = (
			<Nav className="ml-auto" navbar>
				<NavItem>
					<NavLink href="/Profile" className={'nav-link'}>Profile</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#" onClick={this.onLogout}>Logout</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/">Contact</NavLink>
				</NavItem>
			</Nav>
		)

		const guestLinks = (
			<Nav className="ml-auto" navbar>
				<NavItem>
					<NavLink href="/Login" className={'nav-link'}>Login</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/Register" onClick={this.onLogout}>Register</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/">Contact</NavLink>
				</NavItem>
			</Nav>
		)

		return (
			<div>
				<Navbar color="light" light expand="md">
					<NavbarBrand href="/">HouseFax</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						{isAuthenticated ? authLinks : guestLinks}
					</Collapse>
				</Navbar>
			</div>
		);
	}
}

NavigationHeader.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	auth: state.auth
})

export default connect(mapStateToProps, {logoutUser})(withRouter(NavigationHeader));