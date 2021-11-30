import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import Course from "../components/Course";
import { users } from "../data/users";
import { GlobalContext } from "../context/GlobalContext";
import Dashboard from "./Dashboard";
const StudentDashboard = () => {
  const params = useParams();
  const { mobile } = useContext(GlobalContext);
  const [translate, setTranslate] = useState("-50rem");
  const [width, setWidth] = useState("0rem");
  const location = useLocation();
  const [user, setUser] = useState(null);
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

  const [menu, setMenu] = useState({
    dashboard: "",
    assignments: "",
    notes: "",
  });
  const menuHandler = () => {
    setTranslate(() => (translate === "0rem" ? "-50rem" : "0rem"));
    setWidth(() => (width === "0rem" ? "30rem" : "0rem"));
  };
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <nav
        className='sidebar'
        style={{
          transform: `translateX(${translate})`,
          display: "flex",
          width: width,
          backgroundColor: "#444",
          //height: "100vh",
        }}>
        <div className='nav-items'>
          <div
            onClick={() =>
              setMenu({ dashboard: "active", assignments: "", notes: "" })
            }
            className={`nav-item ${menu.dashboard}`}>
            <i className='fas fa-home'></i>
            <Link style={{ marginLeft: "2rem" }} to={location.pathname}>
              Dashboard
            </Link>
          </div>
          <div
            onClick={() =>
              setMenu({ dashboard: "", assignments: "active", notes: "" })
            }
            className={`nav-item ${menu.assignments}`}>
            <i className='fas fa-clipboard    '></i>
            <Link
              style={{ marginLeft: "2rem" }}
              to={`${location.pathname}/assignments`}>
              Assignments
            </Link>
          </div>
          <div
            onClick={() =>
              setMenu({ dashboard: "", assignments: "", notes: "active" })
            }
            className={`nav-item ${menu.notes}`}>
            <i className='fa fa-sticky-note' aria-hidden='true'></i>
            <Link style={{ marginLeft: "2rem" }} to='/notes'>
              Notes
            </Link>
          </div>
        </div>
      </nav>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          overflow: "hidden",
          justifyContent: mobile && "center",
        }}>
        <button
          onClick={menuHandler}
          style={{
            alignSelf: "flex-start",
            background: "none",
            border: "none",
            cursor: "pointer",
            margin: "2rem",
          }}>
          <span
            style={{ fontSize: "2rem !important" }}
            className='fa fa-bars'
            aria-hidden='true'></span>
        </button>
        <section className='course-content'>
          <div>
            <h2 style={{ marginLeft: "2rem" }}>Enrolled Courses</h2>
            <div className='browse-list'>
              {isLoggedIn &&
                user !== null &&
                user.enrolledCourses.map((course) => {
                  return (
                    <Course
                      key={course.id}
                      title={course.title}
                      instructors={course.instructors}
                      info={course.info}
                      link={`../../browse/${course.title
                        .split(" ")
                        .join("-")
                        .toLowerCase()}`}
                    />
                  );
                })}
            </div>
          </div>
          <div>
            <h2 style={{ marginLeft: "2rem" }}>Pending for Approval</h2>
            <div className='dashboard-courses'>
              {isLoggedIn &&
                user !== null &&
                user.pendingCourses.map((course) => {
                  return (
                    <Course
                      key={course.id}
                      title={course.title}
                      instructors={course.instructors}
                      info={course.info}
                      link={`../../browse/${course.title
                        .split(" ")
                        .join("-")
                        .toLowerCase()}`}
                    />
                  );
                })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StudentDashboard;
