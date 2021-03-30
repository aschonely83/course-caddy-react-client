import React from 'react'
import CourseListItem from './CourseListItem';

const CoursesList = ({ courses }) => {
  return (
    <div>
      <h1 className="pb-6">Course List</h1>      
      <ul>
        {courses.map((course) => ( 
          <CourseListItem key={course.id} course={course} />
        ))}
      </ul>
    </div>    
  )    
}

export default CoursesList;