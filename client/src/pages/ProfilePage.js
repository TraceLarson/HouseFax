import React, {Component} from 'react';
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import EditProfile from '../components/EditProfile'

class ProfilePage extends Component {

	state = {
		user: {}
	}

	componentWillMount() {
		axios.get('/user/me')
			.then(response => {
				let user = response.data
				console.log(user)
				this.setState({
					user: user
				})
			})
	}

	render() {
		let userInfo = Object.keys(this.state.user).map(key => {
			let currentUserInfo = this.state.user[key]
			return (
				<li key={key}>
					<strong>{key}: </strong>{currentUserInfo}
				</li>
			)
		})

		return (
			<div>
				<p>Profile Page</p>
				<ul>
					{userInfo}
				</ul>
				<EditProfile
					firstname={this.state.user.firstname}
					lastname={this.state.user.lastname}
					email={this.state.user.email}
					password={'*******'}
					created_at={this.state.user.created_at}
				/>

			</div>
		);
	}
}

export default connect( )(withRouter(ProfilePage));