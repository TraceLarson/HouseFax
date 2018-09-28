import React, {Component} from 'react';
import CircularProgressbar from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'



class FamilyFriendlyRating extends Component {
	state = {
		percentage: 75
	}


	render() {
		return (
			<div className={'family-friendly-rating-container'}>
				<CircularProgressbar
					percentage={this.state.percentage}
					text={`${this.state.percentage}`}
					initialAnimation={true}
					styles={{
						path: { stroke: `rgba(62, 152, 199, ${this.state.percentage / 100})` },
						text: { fill: '#f88', fontSize: '16px' },
					}}
				/>
			</div>
		)
	}
}

export default FamilyFriendlyRating;