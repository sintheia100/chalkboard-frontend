import React from "react";
import { Link } from "react-router-dom";
import Course from "../components/Course";
import { GlobalContext } from "../context/GlobalContext";
const TeacherDashboard = () => {
  const { user } = React.useContext(GlobalContext);
  return (
    <div className='ins-dash-container'>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <h1>Dashboard</h1>
        <Link to='/' className='new-course-btn'>
          Create new Course
        </Link>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow:
              "1px 1px 1px 1px rgba(0,0,0,0.1), -1px -1px 1px 1px rgba(0,0,0,0.1)",
            height: "2rem",

            padding: "1rem",
            borderRadius: "3px",
          }}>
          <span style={{ color: "var(--color-primary)", fontWeight: "500" }}>
            Request for Enrollement
          </span>
          <span style={{ color: "#666", fontWeight: "500" }}>10</span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            margin: "2rem 0",
            gridGap: "2rem",
          }}>
          <div
            style={{
              boxShadow:
                "1px 1px 1px 1px rgba(0,0,0,0.1), -1px -1px 1px 1px rgba(0,0,0,0.1)",
              borderRadius: "3px",
              height: "10rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 1rem",
              //marginRight: "2rem",
            }}>
            <span
              style={{ color: "#444", fontSize: "1.5rem", fontWeight: "500" }}>
              Enrolled Students
            </span>
            <span
              style={{
                color: "var(--color-primary)",
                fontSize: "2.4rem",
                fontWeight: "700",
              }}>
              10,404
            </span>
          </div>
          <div
            style={{
              boxShadow:
                "1px 1px 1px 1px rgba(0,0,0,0.1), -1px -1px 1px 1px rgba(0,0,0,0.1)",
              borderRadius: "3px",
              height: "10rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 1rem",
              //marginRight: "2rem",
            }}>
            <span
              style={{ color: "#444", fontSize: "1.5rem", fontWeight: "500" }}>
              Total Courses
            </span>
            <span
              style={{
                color: "var(--color-primary)",
                fontSize: "2.4rem",
                fontWeight: "700",
              }}>
              4
            </span>
          </div>
        </div>
        <div>
          <h3>Courses You are teaching...</h3>
          <div className='browse-list'>
            {user.courses.map((course) => {
              return (
                <Course
                  title={course.title}
                  info={course.info}
                  instructors={course.instructors}
                  key={course.id}
                  link={course.courseUrl}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
