import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createRound} from '../actions/rounds';
class NewRoundContainer extends Component {
 
  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData();
    
    formData.append('round[par]', form.par.value);
    formData.append('round[score]', form.score.value);
    form.card.files[0] &&
      formData.append('round[card]',form.card.files[0], form.card.value);
    formData.append('round[course_id]', this.props.match.params.courseId);

    this.props.dispatchCreateRound(formData)
      .then((roundJson) => {
        this.props.history.push(`/courses/${this.props.match.params.courseId}`);
      });
  };

  render() {
    return ( 
    <form
      className="max-w-4xl w-11/12 mx-auto mt-16 shadow-lg px-8 py-6"
      onSubmit={this.handleSubmit}
    >      
    <h1 className="text-center text-3xl font-semibold mb-8 ">New Round</h1>
    <fieldset className="">
      <label htmlFor="par" className="block uppercase">
        Par:
      </label>
      <input
        type="text"
        name="par"
        id="par"
        className="w-full border-2 p-4 my-4" 
       />
    </fieldset>
    <fieldset className="">
      <label htmlFor="score" className="block uppercase">
        Score:
      </label>
      <input
        type="text"
        name="score"
        id="score"
        className="w-full border-2 p-4 my-4" 
       />
    </fieldset>
    <fieldset className="">
      <label htmlFor="card" className="block uppercase">
        Card
      </label>
      <input
        type="file"
        className="w-full my-4"
        name="card"
        id="card"
      />
    </fieldset>
    <button
      type="submit" 
      className="w-full p-4 bg-green-600 hover:bg-green-700 transition-all duration-200 text-yellow-400 font-semibold">ADD ROUND</button>
    </form> 
   )    
  }    
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchCreateRound: (formData) => dispatch(createRound(formData)),
  };
};

export default connect(null, mapDispatchToProps)(NewRoundContainer)