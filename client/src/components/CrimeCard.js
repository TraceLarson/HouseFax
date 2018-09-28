import React, {Component} from 'react';
import {
	Button
} from 'reactstrap'

class CrimeCard extends Component {
	render() {
		const now  = new Date()
		const then = this.props.occDateTime

		// const time = Math.abs(now - then)

		return (
			<div className={'card'}>
				<div className={'card-body'}>
					<strong className={'card-title'}>{this.props.crimeType}</strong>
					<p className={'card-text'}>{then}</p>
					<Button><strong>View On Map</strong></Button>
				</div>
			</div>
		);
	}
}

export default CrimeCard;