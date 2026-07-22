import { createStore, combineReducers, applyMiddleware } from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceReducer from './ice/iceReducer';
import logger from 'redux-logger'

const rootReducer = combineReducers({
    cake: cakeReducer,
    ice: iceReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))

export default store;