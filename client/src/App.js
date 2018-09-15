import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<h1>Hello</h1>
				</div>
			</Router>
		);
	}
}

export default App
