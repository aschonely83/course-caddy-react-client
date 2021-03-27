import { combineReducers } from 'redux';
import coursesReducer from './courses';
import roundsReducer from './rounds';

export default combineReducers({
  courses: coursesReducer,
  rounds: roundsReducer    
});