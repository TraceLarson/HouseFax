import React, {Component} from 'react';

class ResultsItem extends Component {
	render() {
		let mediaArray = []
		let imageSrc
		if(Object.keys(this.props.media).length > 0) {
			Object.keys(this.props.media).map(key => {
				let mediaItem = this.props.media[key]
				return mediaArray.push(mediaItem)
			})
			imageSrc = mediaArray[0].MediaURL
		}else {
			imageSrc = ''
		}

		return (
			<div>
				<p>ResultsItem Component</p>
				<br/>
				<ul>
					<li><img src={imageSrc} alt={'property photo'}/></li>
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