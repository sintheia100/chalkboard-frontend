import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import HomePage from "./screens/HomePage";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Browse from "./screens/BrowseScreen";
import StudentLogin from "./screens/StudentLogin";
import TeacherLogin from "./screens/TeacherLogin";
import Header from "./components/Header";
import CoursePage from "./screens/CoursePage";
import StudentDashboard from "./screens/StudentDashboard";
import AssignmentsPage from "./screens/AssignmentsPage";
import CourseAssignment from "./screens/CourseAssignment";
import TeacherDashboard from "./screens/TeacherDashboard";
import { GlobalContext } from "./context/GlobalContext";
import AdminView from "./screens/AdminView";

const App = () => {
  const { isLoggedIn } = React.useContext(GlobalContext);
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <Router basename='/'>
      <Header />
      {/* <hr className='header-divider' /> */}
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/admin' exact component={AdminView} />
        <Route path='/login' exact>
          {isLoggedIn ? (
            <Redirect to={`${user !== null && user._id}/dashboard`} />
          ) : (
            <Login />
          )}
        </Route>

        <Route path='/login/student' exact>
          {isLoggedIn ? (
            <Redirect to={`${user !== null && user._id}/dashboard`} />
          ) : (
            <StudentLogin />
          )}
        </Route>
        <Route path='/login/instructor' exact>
          {isLoggedIn ? (
            <Redirect to={`${user !== null && user._id}/dashboard`} />
          ) : (
            <TeacherLogin />
          )}
        </Route>
        <Route path='/signup' exact>
          {isLoggedIn ? (
            <Redirect to={`${user !== null && user._id}/dashboard`} />
          ) : (
            <Signup />
          )}
        </Route>
        <Route path='/browse' exact component={Browse} />
        <Route path='/browse/:id' component={CoursePage} />
        <Route path='/:user/dashboard' exact>
          {isLoggedIn ? <StudentDashboard /> : <Redirect to='/login' />}
        </Route>
        <Route
          path='/:user/dashboard/assignments'
          exact
          component={AssignmentsPage}
        />
        <Route
          path='/:user/assignments/:assignmentId'
          component={CourseAssignment}
        />
        <Route path='/:user/instructor/dashboard'>
          {isLoggedIn ? <TeacherDashboard /> : <Redirect to='/login' />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
