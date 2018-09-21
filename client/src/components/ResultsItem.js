import React, {Component} from 'react';
import {
	Container,
	Button,
	CardTitle,
	CardText,
	Col
} from 'reactstrap'

class ResultsItem extends Component {

	numberWithCommas = (x) => {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	render() {
		let mediaArray = []
		let imageSrc
		this.props.media != null ? (
			Object.keys(this.props.media).map(key => {
				let mediaItem = this.props.media[key]
				return mediaArray.push(mediaItem)
			}),
				imageSrc = mediaArray[0].MediaURL
		) : (
			imageSrc = 'http://fpoimg.com/245x200'
		)

		return (
			<Col sm={'6'} className={'container mb-5 '}>
				<div className={'d-flex result-item'}>
					<img className={'rounded float-left'} src={imageSrc} alt={'property'} width={"245px"}
					     height={"200px"}/>
					<div className={'ml-4 mt-2'}>
						<CardTitle><h4>${this.numberWithCommas(this.props.price)}.00</h4></CardTitle>
						<CardText>{this.props.address}<br/><small>{this.props.city}, {this.props.state} {this.props.zip}</small></CardText>
					</div>
				</div>
			</Col>
		);
	}
}

export default ResultsItem;