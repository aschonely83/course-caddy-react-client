import React, { Component} from 'react';
import { connect } from 'react-redux';
import { fetchCourses } from '../actions/courses';
import CoursesList from '../components/CoursesList';
import Counter from '../components/Counter'


class CoursesIndexContainer extends Component {
  componentDidMount() {
    this.props.dispatchFetchCourses()   
  }
    
  render() {
    if (this.props.loadingState === 'notStarted') {
      return null
    }
    return (
      <section className="max-w-5xl w-11/12 mx-auto mt-16 p-8">
          {this.props.loadingState === 'inProgress' ? (
            'loading' 
          ) : (
            <CoursesList courses={this.props.courses} />
          )}
         <br></br> <Counter /> 
      </section>  
    )    
  }    
}

const mapStateToProps = (state) => {
  return {
    courses: state.courses.list,
    loadingState: state.courses.loadingState,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchFetchCourses: () => dispatch(fetchCourses()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesIndexContainer)