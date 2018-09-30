import React, {Component} from 'react';
import CircularProgressbar from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'


class FamilyFriendlyRating extends Component {
	state = {
		percentage: 0,
		keywords: {
			'assault': 15,
			'marijuana': 3,
			'theft': 5,
			'burglary': 15,
			'resisting': 10,
			'harassment': 5,
			'unlawful': 2,
			'trespass': 3,
			'dwi': 10,
			'disturbance': 1,
			'violence': 5
		},
	}



	componentWillMount(){
		console.log(this.props.crimeList)
		let score = 0
		let crimeTypeArray = []
		Object.keys(this.props.crimeList).map(key => {
			let crime = this.props.crimeList[key]
			crimeTypeArray.push(crime)
		})
		// console.log(crimeTypeArray)

		crimeTypeArray.forEach(crime => {
			Object.keys(this.state.keywords).map(key => {
				let pointValue = this.state.keywords[key]
				if (crime.crime_type.toLowerCase().includes(key)){
					score += pointValue
					return;
				}else {
					return;
				}
			})
			return null
		})
		// console.log(`Score pre avg: ${score}`)
		score = score / crimeTypeArray.length
		let percentage = 100 - score
		// console.log(`Crime Percentage: ${percentage}`)
		this.setState({
			percentage
		})
	}


	render() {
		return (
			<div>
				<h3 className={'mb-3'}>Family Friendly Rating</h3>
				<div className={'family-friendly-rating-container'}>
					<CircularProgressbar
						percentage={this.state.percentage}
						text={`${this.state.percentage}%`}
						initialAnimation={true}
						strokeWidth={2}
						counterClockwise={true}
						styles={{
							path: { stroke: `rgba(62, 152, 199, ${this.state.percentage / 100})` },
							text: { fill: '#73cd1f', fontSize: '24px', fontWeight: '900'},
						}}
					/>
				</div>
			</div>
		)
	}
}

export default FamilyFriendlyRating;