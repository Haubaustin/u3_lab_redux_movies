import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import MovieReducer from './reducers/MovieReducer'
import DetailReducer from "./reducers/DetailReducer"


const store = createStore(
    combineReducers({
      movieState: MovieReducer,
      detailState: DetailReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
  )
  
  export default store
  