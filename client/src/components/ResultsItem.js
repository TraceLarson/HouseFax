import React, {Component} from 'react';
import {
	Container,
	Card,
	CardBody,
	Button,
	CardTitle,
	CardText,
	CardImg
} from 'reactstrap'

class ResultsItem extends Component {
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
			imageSrc = ''
		)

		return (
			<div>
				<Container>
					<Card>
						<CardBody>
							<img src={imageSrc} alt={'property'} width={"245px"} height={"200px"}/>
							<CardTitle>${this.props.price}.00</CardTitle>
							<CardText>{this.props.address}</CardText>
							<CardText>{this.props.city}, {this.props.state}</CardText>
						</CardBody>
					</Card>
				</Container>
			</div>

		);
	}
}

export default ResultsItem;