import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {}

const middleWare = applyMiddleware(thunk)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
	rootReducer,
	initialState,
	composeEnhancers(middleWare)
)

export default store

//***********************************************************
// _________________ORIGINAL ____________________________
//*********************************************************

// const store = createStore(
// 	rootReducer,
// 	initialState,
// 	compose(applyMiddleware(thunk),
// 		window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()));



//************************************************
// _____________________SECOND TRY_________________
//*************************************************

// if (window.navigator.userAgent.includes('Chrome')) {
// 	const store = createStore(
// 		rootReducer,
// 		initialState,
// 		compose(
// 			applyMiddleware(thunk/*routerMiddleware(browserHistory)*/),
// 			window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// 		)
// 	);
//
// } else {
// 	const store = createStore(
// 		rootReducer,
// 		initialState,
// 		compose(
// 			applyMiddleware(thunk/*routerMiddleware(browserHistory)*/)
// 		)
// 	);
// }