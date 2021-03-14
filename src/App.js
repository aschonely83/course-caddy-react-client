import React from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink,} from 'react-router-dom';
import CoursesIndexContainer from './containers/CoursesIndexContainer';
import CourseFormContainer from './containers/CourseFormContainer';

function App() {
  return (
    <div className="App">
      <Router>
      <nav className="text-center bg-green-900 text-blue-100 p-4">
        <NavLink 
          className="inline-block px-4 py-2"
          activeClassName="text-blue-300"
          exact 
          to="/"
          >
            Courses
        </NavLink>
        <NavLink 
          className="inline-block px-4 py-2"
          activeClassName="text-blue-300" 
          to="/courses/new"
          >
            New Course
        </NavLink>
      </nav>
        <Switch>
          <Route exact path="/">
            <CoursesIndexContainer />
            </Route>
          <Route path="/courses/new">New Course</Route>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
