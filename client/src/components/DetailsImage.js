import React, {Component} from 'react';
import {
	Container,
} from 'reactstrap'

class DetailsImage extends Component {
	render() {
		let mediaArray = []
		let imageSrc =  this.props.media != null ? (
			Object.keys(this.props.media).map(key => {
				let mediaItem = this.props.media[key]
				return mediaArray.push(mediaItem)
			}),
				  mediaArray[0].MediaURL
		) : (
			 'http://fpoimg.com/760x466'
		)

		const tourButton = this.props.virtualTour !== null ? (
			<a className={'btn btn-secondary'} href={this.props.virtualTour} target={'_blank'} >Tour</a>
		) : ''

		return (
			<Container className={'pl-0'}>
				<div className={'details-image-container'}>
					<img className={'img-fluid'} src={imageSrc} alt={'house'} width={'760px'} height={'466px'}/>
					{tourButton}
				</div>
			</Container>
		);
	}
}


export default DetailsImage;
