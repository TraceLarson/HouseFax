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
		let userInfoArray = []
		Object.keys(this.state.user).map(key => {
			let currentUserInfo = this.state.user[key]
			userInfoArray.push(currentUserInfo)
			return false
		})
		userInfoArray = userInfoArray.map((info, key) => {
			return <li key={key}>{info}</li>
		})
		console.log(userInfoArray)
		return (
			<div>
				<p>Profile Page</p>
				<ul>
					{userInfoArray}
				</ul>
			</div>
		);
	}
}

export default ProfilePage;