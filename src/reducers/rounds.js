import {
  SUCCESSFULLY_LOADED_COURSE_ROUNDS,
  START_LOADING_COURSE,
  SUCCESSFULLY_CREATED_ROUND    
} from "../actions"

const intialState = {
  coursesLoaded: {},
  list: [],    
}

export default function roundReducer(state = intialState, action) {
  switch (action.type) {
    case START_LOADING_COURSE:
      return {
        ...state,
        coursesLoaded: {...state.coursesLoaded, [action.payload]: "inProgress"},
    };
    case SUCCESSFULLY_LOADED_COURSE_ROUNDS:
      return {
        coursesLoaded: {
          ...state.coursesLoaded,
          [action.payload.course.id]: "successfull",
        },
        list: state.list
        .filter((round) => round.course_id !== action.payload.course.id)
        .concat(action.payload.rounds),
      };
    case SUCCESSFULLY_CREATED_ROUND:
      return {
        ...state,
        list: state.list.concat(action.payload)
      }  
    default:
      return state;    
  }  
}