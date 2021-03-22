import React from 'react'
import { BrowserRouter as Router, 
  Switch, 
  Route, 
  NavLink
} from 'react-router-dom';
import CoursesIndexContainer from './containers/CoursesIndexContainer';
import CourseFormContainer from './containers/CourseFormContainer';
import NewRoundContainer from './containers/NewRoundContainer'
import CourseShowContainer from './containers/CourseShowContainer';

function App() {
  return (
    <div className="App">
      <Router>
      <nav className="text-center bg-yellow-400 text-red-600 p-4">
        <NavLink 
          className="inline-block px-4 py-2"
          activeClassName="text-red-800"
          exact 
          to="/"
          >
            Courses
        </NavLink>
        <NavLink 
          className="inline-block px-4 py-2"
          activeClassName="text-red-800" 
          to="/courses/new"
          >
            New Course
        </NavLink>
      </nav>
        <Switch>
          <Route exact path="/">
            <CoursesIndexContainer />
          </Route>
          <Route path="/courses/new" component={CourseFormContainer} />
          <Route path="/courses/:courseId/rounds/new" component={NewRoundContainer} />
          <Route path="/courses/:courseId" component={CourseShowContainer} />
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
