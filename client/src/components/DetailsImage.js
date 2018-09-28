import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
	Container,
	Button
} from 'reactstrap'

class DetailsImage extends Component {
	render() {
		let mediaArray = []
		let imageSrc = ''
		this.props.media != null ? (
			Object.keys(this.props.media).map(key => {
				let mediaItem = this.props.media[key]
				return mediaArray.push(mediaItem)
			}),
				imageSrc = mediaArray[0].MediaURL
		) : (
			imageSrc = 'http://fpoimg.com/760x466'
		)

		return (
			<Container className={'pl-0'}>
				<div className={'details-image-container'}>
					<img className={'img-fluid'} src={imageSrc} alt={'house'} width={'760px'} height={'466px'}/>
					<a className={'btn btn-secondary'} href={this.props.virtualTour} target={'_blank'} >Tour</a>
				</div>
			</Container>
		);
	}
}

DetailsImage.propTypes = {};

export default DetailsImage;
