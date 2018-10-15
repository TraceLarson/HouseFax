import React, {Component} from 'react'
import {BrowserRouter as Router, Route, BrowserHistory} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'

import jwt_decode from 'jwt-decode'
import setAuthToken from './setAuthToken'
import { setCurrentUser, logoutUser} from './actions/authentication'

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

if (localStorage.jwtToken) {
	setAuthToken(localStorage.jwtToken)
	const decoded = jwt_decode(localStorage.jwtToken)
	store.dispatch(setCurrentUser(decoded))

	const currentTime = Date.now() / 1000
	if (decoded.exp < currentTime) {
		store.dispatch(logoutUser())
		window.location.href = '/Login'
	}
}

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div className="App">
						<NavigationHeader/>
						<Route exact path={'/'} component={HomePage}/>
						<Route path={'/Login'} component={LoginPage}/>
						<Route path={'/Register'} component={RegisterPage}/>
						<Route path={'/Profile'} component={ProfilePage}/>
						<Route path={'/Results'} component={ResultsPage}/>
						<Route path={'/Details'} component={DetailsPage}/>
						<Footer/>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App
