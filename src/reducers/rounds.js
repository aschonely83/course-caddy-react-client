import {
  SUCCESSFULLY_LOADED_COURSE_ROUNDS,
  START_LOADING_COURSE,    
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
        list: state.list.concat(action.payload.rounds),
      };
    default:
      return state;    
  }  
}