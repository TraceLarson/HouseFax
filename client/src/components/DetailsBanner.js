import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {
	Container,
	Button
} from 'reactstrap'

class DetailsBanner extends Component {

	numberWithCommas = (x) => {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	render() {
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
							<Button className={'mb-0 ml-4'} size={"sm"}> Like </Button>
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

export default DetailsBanner;

DetailsBanner.propTypes = {}