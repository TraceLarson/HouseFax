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
							<li>Home type</li>
							<li> Beds</li>
							<li> Bath</li>
							<li>Built in</li>
						</ul>
						<ul>
							<li> sq ft</li>
							<li>$ /sqft</li>
							<li>$ /month HOA</li>
						</ul>
					</div>
					<p>Description</p>
				</Container>
			</div>
		);
	}
}

PropertyDetails.propTypes = {};

export default PropertyDetails;
