import{
  ADD_COURSE, 
  START_LOADING_COURSES,
  START_LOADING_COURSE,
  SUCCESSFULLY_LOADED_COURSES,
  FAILED_LOADED_COURSES,
  SUCCESSFULLY_LOADED_COURSE_ROUNDS,
} from "../actions"
const intialState = {
    loadingState: "notStarted",
    list: [],
};

export default function courseReducer(state = intialState, action) {
  switch(action.type) {
    case START_LOADING_COURSES:
      return {...state, loadingState: "inProgress"};
    case SUCCESSFULLY_LOADED_COURSES:
      return {
        list: action.payload,
        coursesLoadingState: "successful",  
      };
    case SUCCESSFULLY_LOADED_COURSE_ROUNDS:
      const foundCourse = state.list.find(course => course.id == action.payload.course.id)
      if (foundCourse) {
        return state
      } else {
        return {
          ...state,
          list: state.list.concat(action.payload.course),
        };
      }                 
    default:
      return state          
  }    
}