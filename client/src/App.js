import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import HomePage from './pages/HomePage'

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<HomePage />
				</div>
			</Router>
		);
	}
}

export default App
