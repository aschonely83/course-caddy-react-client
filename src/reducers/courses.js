import{
  START_LOADING_COURSES,
  SUCCESSFULLY_LOADED_COURSES,
  FAILUREFULLY_LOADED_COURSES,
  ADD_COURSE,    
} from '../actions'
const intialState = {
    loadingState: 'notStarted',
    list: [],
}

export default function CourseReducer(state = intialState, action) {
  switch(action.type) {
    case START_LOADING_COURSES:
      return {...state, loadingState: 'inProgress'}
    case SUCCESSFULLY_LOADED_COURSES:
      return {
        list: action.payload,
        loadingState: 'successful',  
      }               
    default:
      return state          
  }    
}