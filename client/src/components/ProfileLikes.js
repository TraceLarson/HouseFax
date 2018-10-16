import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {
	Collapse,
	Button,
	ListGroup,
	ListGroupItem
} from 'reactstrap'

class ProfileLikes extends Component {

	state = {
		collapse: true
	}

	toggle = () => {
		this.setState({
			collapse: !this.state.collapse
		})
	}

	render() {
		const {likes, deleteLike} = this.props
		const likesList = likes.map(like => {
			return(
				<ListGroupItem key={like._id}>
					{like.address}, {like.city}, {like.state}<button onClick={() => {deleteLike(like._id)}} className={'btn btn-danger pull-right'}>X</button>
				</ListGroupItem>
			)
		})

		return (
			<div className={'container mt-5'}>
				<Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>likes</Button>
				<Collapse isOpen={this.state.collapse}>
					<ListGroup>
						{likesList}
					</ListGroup>
				</Collapse>
			</div>
		);
	}
}

ProfileLikes.propTypes = {
	likes: PropTypes.array.isRequired,
	deleteLike: PropTypes.func.isRequired
}

export default ProfileLikes;