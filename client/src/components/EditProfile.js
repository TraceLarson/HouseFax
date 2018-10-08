import React, {Component} from 'react';
import PropTypes from 'prop-types';

class EditProfile extends Component {

	state = {
		created_at: ''
	}

	componentDidMount() {
		this.setState({
			created_at: this.props.created_at
		})
		
	}

	render() {

		return (
			<div className={"container"}>
				<form>
					<p className={"text-primary"}>Edit Profile</p>
					<p className={"text-primary"}>Member since: {this.props.created_at}</p>
					<div className={"form-group"}>
						<label className={"d-none"} htmlFor="firstname">first name</label>
						<input className={"form-control"} type="text" name={"firstname"} id={"firstname"} value={this.props.firstname}/>
					</div>
					<div className={"form-group"}>
						<label className={"d-none"} htmlFor="lastname">last name</label>
						<input className={"form-control"} type="text" name={"lastname"} id={"lastname"} value={this.props.lastname}/>
					</div>
					<div className={"form-group"}>
						<label className={"d-none"} htmlFor="email">email</label>
						<input className={"form-control"} type="email" name={"email"} id={"email"} value={this.props.email}/>
					</div>
					<div className={"form-group"}>
						<label className={"d-none"} htmlFor="password">password</label>
						<input className={"form-control"} type="password" name={"password"} id={"password"} value={this.props.password}/>
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
