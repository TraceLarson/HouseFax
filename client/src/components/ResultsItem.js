import React, {Component} from 'react';
import {Image} from 'reactstrap'

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


		// if(Object.keys(this.props.media).length > 0) {
		// 	Object.keys(this.props.media).map(key => {
		// 		let mediaItem = this.props.media[key]
		// 		return mediaArray.push(mediaItem)
		// 	})
		// 	imageSrc = mediaArray[0].MediaURL
		// }else {
		// 	imageSrc = ''
		// }

		return (
			<div>
				<p>ResultsItem Component</p>
				<br/>
				<ul>
					<li><Image src={imageSrc} alt={'property'} width={'245'} height={'200'} /></li>
					<li>{this.props.id}</li>
					<li>{this.props.price}</li>
					<li>{this.props.address}</li>
					<li>{this.props.city}</li>

				</ul>
			</div>
		);
	}
}

export default ResultsItem;