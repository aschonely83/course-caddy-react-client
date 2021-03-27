import { START_LOADING_COURSES, SUCCESSFULLY_LOADED_COURSES} from '.'

export const fetchCourses = () => {
  return (dispatch) => {
    dispatch({ type: START_LOADING_COURSES })
    fetch('http://localhost:3001/courses', {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',    
      },    
    })
      .then((res) => res.json())
      .then((coursesJson) => {
        dispatch({
          type: SUCCESSFULLY_LOADED_COURSES,
          payload: coursesJson,    
        })    
      })    
  }    
}