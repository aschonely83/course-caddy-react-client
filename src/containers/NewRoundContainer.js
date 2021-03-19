import React, { Component } from 'react'

export default class NewRoundContainer extends Component {
  state= {
  par: '',
  score: ''
  }
  
  handleChange = (e) => {
    this.setState({
    [e.target.par]: e.target.value,
    [e.target.score]: e.target.value  
    })  
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/rounds", {
      method: 'POST',
      headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({round:this.state}),
    })
      .then(res => res.json())
      .then((roundJson) => {
        this.props.history.push(`/courses/${this.props.match.params.courseId}`);
      })
  }

  render() {
    return ( 
    <form
       onSubmit={this.handleSubmit}
      className="max-w-4xl w-11/12 mx-auto mt-16 shadow-lg px-8 py-6"
    >      
    <h1 className="text-center text-3xl font-semibold mb-8 ">New Round</h1>
    <fieldset className="">
      <label className="block uppercase">Par</label>
      <input
        type="text"
        name="par"
        onChange={this.handleChange}
        value={this.state.par}
        className="w-full border-2 p-4 my-4" 
       />
    </fieldset>
    <fieldset class>
      <label className="block uppercase">Score</label>
      <input
        type="text"
        name="score"
        onChange={this.handleChange}
        value={this.state.score}
        className="w-full border-2 p-4 my-4" 
       />
    </fieldset>
    <button
      type="submit" 
      className="w-full p-4 bg-green-600 hover:bg-green-700 transition-all duration-200 text-yellow-400 font-semibold">ADD ROUND</button>
    </form> 
   )    
  }    
}