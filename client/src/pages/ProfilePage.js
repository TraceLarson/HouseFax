import React, {Component} from 'react';
import axios from 'axios'

class ProfilePage extends Component {

	state = {
		user: {}
	}

	componentWillMount() {
		axios.get('/user/me')
			.then(response => {
				console.log(JSON.stringify(response.data))
			})
	}

	render() {
		return (
			<div>
				<h1>Profile Page</h1>
			</div>
		);
	}
}

export default ProfilePage;