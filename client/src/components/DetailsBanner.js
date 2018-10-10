import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import {
	Container,
	Button
} from 'reactstrap'

class DetailsBanner extends Component {

	numberWithCommas = (x) => {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	render() {

		const {isAuthenticated} = this.props.auth
		const likeButton = <Button className={'mb-0 ml-4'} size={"sm"} onClick={this.props.handleLikeButton}> Like </Button>
		return (
			<div className={'details-banner-container'}>
				<Container className={'d-flex justify-content-between'}>
					<div>
						<h5>{this.props.address}</h5>
						<p>
							<small>{this.props.city}, {this.props.state} {this.props.zip}</small>
						</p>
						<p className={'mb-1'}>{this.props.bedrooms} Beds -
							{this.props.bathrooms} Bath -
							{this.props.propertyType} -
							Built in {this.props.buildYear}
							<span className={'ml-4'}>152 likes</span>
							{isAuthenticated ? likeButton : ''}
						</p>
					</div>
					<div>
						<h1>${this.numberWithCommas(this.props.price)}.00</h1>
					</div>
				</Container>
			</div>
		);
	}
}

DetailsBanner.propTypes = {
    auth: PropTypes.object.isRequired,
	handleLikeButton: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
	auth: state.auth
})


export default connect(mapStateToProps)(withRouter(DetailsBanner));
