import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
	Container
} from 'reactstrap'

class PropertyDetails extends Component {
	render() {
		return (
			<div>
				<h2>Property Details</h2>
				<hr/>
				<Container>
					<div>
						<ul>
							<li>{this.props.propertyType}</li>
							<li>{this.props.bedrooms} Beds</li>
							<li>{this.props.bathrooms} Bath</li>
							<li>Built in {this.props.buildYear}</li>
						</ul>
						<ul>
							<li>{this.props.sqft} sqft</li>
							<li>${ Math.round((this.props.price / this.props.sqft)*100) / 100} /sqft</li>
							<li>${this.props.hoaFee == null ? 0 : this.props.hoaFee} /month HOA</li>
						</ul>
					</div>
					<p>{this.props.description}</p>
				</Container>
			</div>
		);
	}
}

PropertyDetails.propTypes = {};

export default PropertyDetails;
