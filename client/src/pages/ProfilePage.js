import React, {Component} from 'react';
import PropTypes from 'prop-types'
// import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {getCurrentUser} from '../actions/user'

import EditProfile from '../components/EditProfile'

class ProfilePage extends Component {

	state = {
		user: {},
	}

	componentWillMount() {
		this.props.getCurrentUser()
	}

	handleSave = e => {
		e.preventDefault()

		console.log([e.target.firstname.value])
	}

	handleProfileChange = e => {
		this.setState({
			user: {
				[e.target.name]: e.target.value
			}
		})
	}



	render() {
		const {currentUser} = this.props
		const created_at = currentUser.created_at && currentUser.created_at.slice(0,10)

		console.log('ProfilePage Render',this.props.currentUser)

		return (
			<div>
				<EditProfile
					handleProfileChange={this.handleProfileChange}
					handleSave={this.handleSave}
					firstname={currentUser.firstname && currentUser.firstname}
					lastname={currentUser.lastname && currentUser.lastname}
					email={currentUser.email && currentUser.email}
					password={currentUser.password && '*******'}
					created_at={created_at}
				/>
			</div>
		);
	}
}

ProfilePage.propTypes = {
	getCurrentUser: PropTypes.func.isRequired,
	currentUser: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
	currentUser: state.currentUser
})

export default connect(mapStateToProps, {getCurrentUser})(withRouter(ProfilePage));