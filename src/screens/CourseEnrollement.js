import React from "react";

const CourseEnrollement = () => {
  return (
    <div>
      <div>
        <div className='title' style={{ display: "flex", margin: "0 5rem" }}>
          <h2 style={{ marginRight: "auto" }}>Intro to Coding</h2>
          <a
            href='assignments.html'
            style={{
              padding: 1,
              margin: 0,
              display: "flex",
              alignItems: "center",
            }}
            className='btn btn-dark'>
            Assignments
          </a>
        </div>
        <article className='description' style={{ margin: "0 5rem" }}>
          <div>
            <header>Course Description</header>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
              accusamus cum necessitatibus maiores vero delectus laboriosam,
              alias animi aspernatur sint modi, quidem et tenetur hic a, ipsam
              nam. Reprehenderit, eaque?
            </p>
            <ul>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, ad!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                magni eius illum voluptates. Quasi, dignissimos.
              </li>
            </ul>
          </div>
          <div className='lecture-videos'>
            <h4>Lecture Videos</h4>
            <div>
              <ol>
                <li>
                  <a href='#'>Lecture 1</a>
                </li>
                <li>
                  <a href='#'>Lecture 2</a>
                </li>
                <li>
                  <a href='#'>Lecture 3</a>
                </li>
                <li>
                  <a href='#'>Lecture 4</a>
                </li>
                <li>
                  <a href='#'>Lecture 5</a>
                </li>
              </ol>
            </div>
          </div>
          <div className='course-material'>
            <h4>Course Material</h4>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                nobis amet minus ab voluptate deserunt recusandae unde soluta
                numquam non!
              </p>
              <a href='#'>Course-material.zip</a>
            </div>
          </div>
          <div>
            <header>Instructors</header>
            <div>
              <figure>
                <img
                  style={{
                    borderRadius: "50%",
                    width: "110rem",
                    height: "110rem",
                  }}
                  src={}
                  alt={}
                />
              </figure>
              <figcaption>janice queen</figcaption>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default CourseEnrollement;
