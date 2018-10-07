import React, {Component} from 'react';
import axios from 'axios'

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
			</div>
		);
	}
}

export default ProfilePage;