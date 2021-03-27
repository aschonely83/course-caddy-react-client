import React, { Component } from 'react';
import { connect } from "react-redux";
import { createCourse } from "../actions/courses"

class CourseFormContainer extends Component {
  state = {
    name: ""    
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value    
    })    
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatchCreateCourse(this.state)
      .then(courseJson => {
        this.props.history.push('/')
      }) 
  }
  
  render() {
    return (
      <form
        onSubmit={this.handleSubmit} 
        className="max-w-5xl w-3/4 mx-auto mt-16 shadow-lg px-4 py-6">
        <h1 className="text-center text-3xl font-semibold mb-2">New Course</h1>
        <fieldset>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            placeholder="Course Name"
            className="w-full border p-4 my-4" 
          />
        </fieldset>
        <button
          type="submit" 
          className="w-full p-4 bg-green-600 mt-4 hover:bg-green-700 transition-all duration-200 text-yellow-400 font-semibold">ADD COURSE</button>
      </form>    
    )    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchCreateCourse: (formData) => dispatch(createCourse(formData))
  }
}

export default connect(null, mapDispatchToProps)(CourseFormContainer)