import React, { useContext, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { courses } from "../data/courses";
import { GlobalContext } from "../context/GlobalContext";
const CoursePage = () => {
  const { isLoggedIn, mobile } = useContext(GlobalContext);

  const user = JSON.parse(localStorage.getItem("user"));
  const params = useParams();
  const course = courses.filter(
    (course) => course.title.split(" ").join("-").toLowerCase() === params.id
  )[0];
  return (
    <div style={{ margin: "2rem" }}>
      <section
        style={{
          display: "flex",
          alignItems: mobile ? "flex-start" : "center",
          flexDirection: mobile && "column",
          borderRadius: "10px",
          justifyContent: "space-between",
          boxShadow: "1px 2px 5px 1px rgba(0,0,0,0.2)",
          padding: "1rem 2rem",
        }}>
        <div>
          <h1>{course.title}</h1>
          <p style={{ color: "#444", marginBottom: "2rem" }}>{course.info}</p>
          <span style={{ color: "#888" }}>{course.instructors.join(", ")}</span>
        </div>
        <div>
          <button
            style={{
              padding: "1rem 2rem",
              border: "none",
              background: "var(--color-primary)",
              borderRadius: mobile ? "1.5rem" : "2rem",
              color: "#fff",
              marginTop: mobile && "2rem",
              fontSize: mobile && "1.2rem",
              fontWeight: "500",
              textTransform: "uppercase",
            }}>
            Request for Enroll
          </button>
        </div>
      </section>
      <section>
        <h2>Course Sylabbus</h2>
        <p>{course.syllabus}</p>
      </section>
      {isLoggedIn && user !== null && (
        <div>
          <section>
            <h2>Course Content</h2>
            <div className='course-videos'>
              {course.content.map((video) => {
                return (
                  <div style={{ margin: "2rem" }} key={video.id}>
                    <h3>{video.title}</h3>
                    <iframe
                      allowfullscreen='allowfullscreen'
                      mozallowfullscreen='mozallowfullscreen'
                      msallowfullscreen='msallowfullscreen'
                      oallowfullscreen='oallowfullscreen'
                      webkitallowfullscreen='webkitallowfullscreen'
                      style={{
                        borderRadius: "1rem",
                        border: "none",
                        height: "15rem",
                        width: "25rem",
                        boxShadow: "1px 2px 5px 1px rgba(0,0,0,0.2)",
                      }}
                      src={"https://www.youtube.com/watch?v=NNnIGh9g6fA"}
                      frameborder='0'
                      title={"Youtube"}></iframe>
                  </div>
                );
              })}
            </div>
          </section>
          <section>
            <h2>Assignments</h2>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "#fff",
                  boxShadow: "1px 2px 10px 1px rgba(0,0,0,0.2)",
                  padding: "1rem",
                  marginBottom: "1rem",
                  borderRadius: "5px",
                }}>
                <p
                  style={{
                    display: "flex",
                    flexDirection: mobile && "column",
                    margin: 0,
                    padding: 0,
                    fontWeight: "500",
                    letterSpacing: "1px",
                  }}>
                  Assignment 2
                  <Link
                    to={`/${user.userId || ""}/assignments/${course.id}`}
                    style={{
                      fontWeight: "400",
                      marginLeft: "1rem",
                      color: "var(--color-primary)",
                    }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </Link>
                </p>
                <p style={{ margin: 0, padding: 0, fontWeight: "500" }}>
                  Due on{" "}
                  <span style={{ color: "blueviolet", marginLeft: "1rem" }}>
                    23 Dec, 2021
                  </span>
                </p>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default CoursePage;
