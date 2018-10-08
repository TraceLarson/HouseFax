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
		// axios.get('/user/me')
		// 	.then(response => {
		// 		let user = response.data
		// 		console.log(user)
		// 		this.setState({
		// 			user: user
		// 		})
		// 	})
		this.props.getCurrentUser()

	}


	render() {
		const {currentUser} = this.props
		const created_at = currentUser.created_at && currentUser.created_at.slice(0,10)

		console.log('ProfilePage Render',this.props.currentUser)

		return (
			<div>
				<EditProfile
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