import React, {Component} from 'react';
import PropTypes from 'prop-types';

class EditProfile extends Component {

	state = {
		firstname: '',
		lastname: '',
		email: '',
		password: '',
		created_at: ''
	}

	handleChange = e => {
		e.preventDefault()

		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = e => {

	}

	render() {

		return (
			<div className={"container"}>
				<form>
					<p className={"text-primary"}>Edit Profile</p>
					<p className={"text-primary"}>Member since: {this.props.created_at}</p>
					<div className={"form-group"}>
						<label className={"d-none"} htmlFor="firstname">first name</label>
						<input className={"form-control"}
						       type="text"
						       name={"firstname"}
						       id={"firstname"}
						       value={this.state.firstname}
						       onChange={this.handleChange}/>
					</div>
					<div className={"form-group"}>
						<label className={"d-none"} htmlFor="lastname">last name</label>
						<input className={"form-control"}
						       type="text" name={"lastname"}
						       id={"lastname"}
						       value={this.state.lastname}
						       onChange={this.handleChange}/>
					</div>
					<div className={"form-group"}>
						<label className={"d-none"} htmlFor="email">email</label>
						<input className={"form-control"}
						       type="email"
						       name={"email"}
						       id={"email"}
						       value={this.state.email}
						       onChange={this.handleChange}/>
					</div>
					<div className={"form-group"}>
						<label className={"d-none"} htmlFor="password">password</label>
						<input className={"form-control"}
						       type="password"
						       name={"password"}
						       id={"password"}
						       value={this.state.password}
						       onChange={this.handleChange}/>
					</div>
					<button className={"btn btn-primary"}> Save </button>
				</form>
			</div>
		);
	}
}

EditProfile.propTypes = {
	firstname: PropTypes.string.isRequired,
	lastname: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
	created_at: PropTypes.string.isRequired
};



export default EditProfile;
