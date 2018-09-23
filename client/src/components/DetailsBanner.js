import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {
	Container
} from 'reactstrap'

class DetailsBanner extends Component {
	render() {
		return (
			<div className={'details-banner-container'}>
				<Container>
					<div >
						<h5>{this.props.address}</h5>
						<p><small>{this.props.city}, {this.props.state} {this.props.zip}</small></p>
						<p>{this.props.bedrooms} Beds - {this.props.bathrooms} Bath - {this.props.propertyType} - Built in {this.props.buildYear}</p>
					</div>
				</Container>
			</div>
		);
	}
}

export default DetailsBanner;

DetailsBanner.propTypes = {}