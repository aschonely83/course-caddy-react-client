import { SUCCESSFULLY_CREATED_ROUND} from '.'
export const createRound = (formData) => {
  return (dispatch) => {
    return fetch('http://localhost:3001/rounds', {
      method: 'POST',
      body: formData    
    })
     .then(res => {
       if (res.ok) {
         return res.json()    
       } else {
         return res.json().then(errors => Promise.reject(errors));    
       }    
     })
     .then(roundJson => {
       dispatch({
         type: SUCCESSFULLY_CREATED_ROUND,
         payload: roundJson    
       })    
     })     
  }    
}