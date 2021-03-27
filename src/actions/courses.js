import { 
  START_LOADING_COURSES,
  START_LOADING_COURSE, 
  SUCCESSFULLY_LOADED_COURSES,
  SUCCESSFULLY_LOADED_COURSE_ROUNDS,
  SUCCESSFULLY_CREATED_COURSE,
} from ".";

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
          payload: coursesJson    
        })    
      });    
  }    
}

export const fetchCourse = (courseId) => {
  return (dispatch) => {
    dispatch({ type: START_LOADING_COURSE, payload: courseId });
    fetch(`http://localhost:3000/courses/${courseId}`)
      .then((res) => res.json())
      .then((courseRoundsJson) => {
        dispatch({ 
          type: SUCCESSFULLY_LOADED_COURSE_ROUNDS,
          payload: courseRoundsJson
        })
      });
  };
};

export const createCourse = (formData) => {
  return (dispatch) => {
    return fetch('https://localhost:3001.courses', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({course: formData})
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          return res.json().then(errors => Promise.reject(errors))
        }
      })
      .then(courseJson => {
        dispatch({ 
          type: SUCCESSFULLY_CREATED_COURSE,
          payload: courseJson
        });
      })
  }
}