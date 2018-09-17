import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import ResultsPage from './pages/ResultsPage'
import DetailsPage from './pages/DetailsPage'

import NavigationHeader from './components/NavigationHeader'
import Footer from './components/Footer'

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<NavigationHeader />
					<Route exact path={'/'} component={HomePage} />
					<Route path={'/Login'} component={LoginPage} />
					<Route path={'/Register'} component={RegisterPage} />
					<Route path={'/Profile'} component={ProfilePage} />
					<Route path={'/Results'} component={ResultsPage} />
					<Route path={'/Details'} component={DetailsPage} />
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App
