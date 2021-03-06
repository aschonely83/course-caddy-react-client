import{
  START_LOADING_COURSES,
  SUCCESSFULLY_LOADED_COURSES,
  SUCCESSFULLY_LOADED_COURSE_ROUNDS,
  SUCCESSFULLY_CREATED_COURSE,
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
      const foundCourse = state.list.find(course => course.id === action.payload.course.id)
      if (foundCourse) {
        return state
      } else {
        return {
          ...state,
          list: state.list.concat(action.payload.course),
        };
      }
    case SUCCESSFULLY_CREATED_COURSE:
      return {
        ...state,
        list: state.list.concat(action.payload)
      }                   
    default:
      return state;          
  }    
}