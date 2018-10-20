import React, {Component} from 'react';
import PropTypes from 'prop-types'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {getCurrentUser} from '../actions/user'
import {updateCurrentUser} from '../actions/user'

import EditProfile from '../components/EditProfile'
import ProfileLikes from '../components/ProfileLikes'

class ProfilePage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			user: {},
		}
		this.handleDeleteLike = this.handleDeleteLike.bind(this)
	}

	async componentDidMount() {
		await this.setState({
			user: this.props.getCurrentUser()
		})
	}

	handleSave = e => {
		e.preventDefault()
		console.log('handleSave ', this.props.currentUser._id,)
		let user = {
			_id: this.props.currentUser._id,
			firstname: e.target.firstname.value,
			lastname: e.target.lastname.value,
			email: e.target.email.value,
			password: e.target.password.value
		}
		this.setState({
			user: user,

		})
		this.props.updateCurrentUser(user, this.props.history)
	}

	handleProfileChange = e => {
		this.setState({
			user: {
				[e.target.name]: e.target.value
			}
		})
	}


	async handleDeleteLike(property) {
		console.log(`****\r\n handleDeleteLike button\r\n property id: ${property}\r\n****`)
		await axios.delete(`user/properties/${property}`)
			.then(response => {
				console.log(`****\r\n handleDeleteLike button\r\n response from delete: ${response.data}\r\n****`)
				this.componentDidMount()
			})
			.catch(err => {
				console.error(`****\r\n handleDeleteLike button ERROR \r\nError deleting property ${err.message}\r\n****`)
			})


	}


	render() {
		const {currentUser} = this.props
		const created_at = currentUser.created_at && currentUser.created_at.slice(0, 10)


		console.log(`****\r\nProfilePage Render\r\n CurrentUser: ${this.props.currentUser}\r\n****` )

		return (
			<div className={'container'}>
				<div className={'row'}>
					<div className={'col-sm-10 col-md-6'}>
						<EditProfile
							handleProfileChange={this.handleProfileChange}
							handleSave={this.handleSave}
							firstname={currentUser.firstname && currentUser.firstname}
							lastname={currentUser.lastname && currentUser.lastname}
							email={currentUser.email && currentUser.email}
							password={currentUser.password && currentUser.password}
							created_at={created_at}
						/>
					</div>
					<div className={'col-sm-10 col-md-6'}>
						<ProfileLikes likes={currentUser.properties || ['...Loading']} deleteLike={this.handleDeleteLike.bind(this)}/>
					</div>
				</div>
			</div>
		);
	}
}

ProfilePage.propTypes = {
	getCurrentUser: PropTypes.func.isRequired,
	updateCurrentUser: PropTypes.func.isRequired,
	currentUser: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
	currentUser: state.currentUser
})

export default connect(mapStateToProps, {getCurrentUser, updateCurrentUser})(withRouter(ProfilePage));