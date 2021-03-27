import { combineReducers } from 'redux'
import coursesReducer from './courses'

export default combineReducers({
  courses: coursesReducer,    
})