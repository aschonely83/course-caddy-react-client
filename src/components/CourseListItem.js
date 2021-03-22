import React from 'react' 
import { Link } from 'react-router-dom'

const CourseListItem = ({ course }) => {
  return ( 
  <li className="" key={course.id}>
    <Link to={`/courses/${course.id}`}>{course.name}</Link>
  </li>      
  )
}

export default CourseListItem