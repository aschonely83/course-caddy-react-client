import React, { Component} from 'react'
import CoursesList from '../components/CoursesList';


export default class CoursesIndexContainer extends Component {
  
    state = {
      courses: [],
      loading: true    
    }

    componentDidMount() {
      fetch('http://localhost:3001/courses', {
          method: 'get',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(coursesJson => {
            this.setState({
              courses: coursesJson,
              loading: false
            })
          })
        
      }
    
    render() {
    return (
      <section className="max-w-5xl w-11/12 mx-auto mt-16">
          {this.state.loading ? 'loading' : <CoursesList courses={this.state.courses} /> }
      </section>  
    )    
  }    
}