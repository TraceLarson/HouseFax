import React, {Component} from 'react'
import Search from '../components/Search'

class HomePage extends Component {
	render() {
		return (
			<div className={'home-container'}>
				<p>Home Page</p>
				<Search />
			</div>
		)
	}
}

export default HomePage