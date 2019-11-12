import { createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from '../store/ducks'
import Reactotron from '../reactotron'

/* eslint-disable-next-line no-undef */
const store = process.env.NODE_ENV === 'development'
    ? createStore(
          reducers,
          compose(
              applyMiddleware(thunkMiddleware),
              Reactotron.createEnhancer()
          )
      )
    : createStore(reducers, applyMiddleware(thunkMiddleware))

export default store
