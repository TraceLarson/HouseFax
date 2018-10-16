import React, {Component} from 'react'
import Search from '../components/Search'

class HomePage extends Component {
	render() {
		return (
			<div className={'home-container'}>

				<div className={'container'} >
					<Search />
				</div>
			</div>
		)
	}
}

export default HomePage