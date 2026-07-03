import { legacy_createStore, combineReducers, compose } from 'redux'
import { reducer as Cart_Reducer } from './Cart_Reducer/reducer'
import { reducer as Auth_Reducer } from './Auth_Reducer/Reducer'

// Reducer Handler
const rootReducer = combineReducers({
  Auth: Auth_Reducer,
  Cart: Cart_Reducer,
})

// Devtools
// Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const Store = legacy_createStore(rootReducer, composeEnhancers())

export { Store }
