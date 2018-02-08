import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {routerMiddlelware} from 'react-router-redux'
import history from '../history'

const enhancer = applyMiddleware(routerMiddlelware(history), thunk, logger)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, {}, composeEnhancers(enhancer))

export default store