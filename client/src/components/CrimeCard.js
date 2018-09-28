import React, {Component} from 'react';
import {
	Button
} from 'reactstrap'

class CrimeCard extends Component {
	render() {
		const now  = new Date()
		let then = this.props.occDateTime.toString()
		let dateThen = new Date(`${then}`)
		let timeDiffDay = (((((now - dateThen) / 1000)/60)/60)/24).toFixed(0)
		let timeDiffHr = (((((now - dateThen) / 1000)/60)/60)%24).toFixed(0)

		return (
			<div className={'card'}>
				<div className={'card-body'}>
					<strong className={'card-title'}>{this.props.crimeType}</strong>
					<p className={'card-text'}>{`${timeDiffDay} days and ${timeDiffHr} hours ago`}</p>
					<Button><strong>View On Map</strong></Button>
				</div>
			</div>
		);
	}
}

export default CrimeCard;