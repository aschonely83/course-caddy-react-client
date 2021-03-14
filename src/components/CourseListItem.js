import React from 'react'

const CourseListItem = ({ course }) => {
  return ( 
  <li className="" key={course.id}>
    {course.name}
  </li>      
  )
}

export default CourseListItem