import React, {Component} from 'react';
import Search from '../components/Search'
import ResultsItem from '../components/ResultsItem'

class ResultsPage extends Component {
	render() {
		return (
			<div>
				<p>Results Page</p>
				<Search />
				<ResultsItem />
			</div>
		);
	}
}

export default ResultsPage;