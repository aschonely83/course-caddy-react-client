import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchCourse } from "../actions/courses";

class CourseShowContainer extends Component {
  state = {
    course: {},
    rounds: [],
    loading: true,
  };

  componentDidMount() {
    const courseId = this.props.match.params.courseId;
    this.props.dispatchFetchCourse(courseId);
  }
  
  render() {
    return (
      <section className="max-w-6xl w-11/12 mx-auto mt-16">
        <h1 className="text-3xl font-bold text-center">
          {this.props.course.name}
        </h1>
        <p className="my-2"><Link to={`/courses/${this.props.course.id}/rounds/new`}>Add a Round</Link></p>
        <div className="grid grid-cols-3">
          {this.props.rounds.map((round) => (
            <figure>
              <p>{round.par}</p>
              <p>{round.score}</p>
              <img className="" 
              src={round.card_url}
              alt="score card" 
              />
            </figure>
          ))}
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state, { match } ) => {
  const courseId = match.params.courseId
  return {
    // eslint-disable-next-line eqeqeq
    course: state.courses.list.find(course => course.id == courseId),
    // eslint-disable-next-line eqeqeq
    rounds: state.rounds.list.filter(round => round.course_id == courseId),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchFetchCourse: (courseId) => dispatch(fetchCourse(courseId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseShowContainer);