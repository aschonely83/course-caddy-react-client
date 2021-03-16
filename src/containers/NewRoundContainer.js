import React, { Component } from 'react'

export default class NewRoundContainer extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const body = new FormData();
    
    body.append("round[par]", form.par.value);
    body.append("round[score]", form.score.value);
    body.append("round[course_id]", this.props.match.params.course_id);

    fetch("http://localhost:3001/rounds", {
      method: "post",
      body    
    })
      .then(res => res.json())
      .then(roundJson => {
        this.props.history.push(`/courses/${this.props.match.params.courseId}`);  
      })
  }

  render() {
    return ( 
    <form
      className="max-w-4xl w-11/12 mx-auto mt-16 shadow-lg px-8 py-6"
      onSubmit={this.handleSubmit}
    >      
    <h1 className="text-center text-3xl font-semibold mb-2">New Round</h1>
    <fieldset className="">
      <input
        type="text"
        name="par"
        placeholder="Par"
        className="w-full border-2 p-4 my-4" 
       />
    </fieldset>
    <fieldset class>
      <input
        type="text"
        name="score"
        placeholder="Score" 
        className="w-full border-2 p-4 my-4" 
       />
    </fieldset>
    <button
      type="submit" 
      className="w-full p-4 bg-green-300 mt-4 hover:bg-green-400 transition-all duration-200">Add Round</button>
    </form> 
   )    
  }    
}