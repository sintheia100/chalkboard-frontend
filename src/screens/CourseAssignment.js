import React, { useRef } from "react";

const CourseAssignment = () => {
  const fileRef = useRef(null);

  return (
    <div className='assignments-container'>
      <h1>Intro to Nodejs</h1>
      <h3>Assignment 1</h3>
      <div className='course-assigments'>
        <div style={{ margin: "2rem 0" }}>
          <p style={{ textAlign: "start", margin: "2rem 0" }}>
            <span>Question 1:</span> Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Consectetur, quae.{" "}
          </p>
          <textarea className='assignment-answer' minLength={8} wrap />
          <div>
            <label className='question-file-upload'>
              <input ref={fileRef} type='file' style={{ display: "none" }} />
              Upload File
            </label>
            <span style={{ color: "#999" }}>
              {fileRef?.current?.files[0].name}
            </span>
          </div>
        </div>
        <div style={{ margin: "2rem 0" }}>
          <p style={{ textAlign: "start", margin: "2rem 0" }}>
            <span>Question 1:</span> Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Consectetur, quae.{" "}
          </p>
          <textarea className='assignment-answer' minLength={8} wrap />
          <div>
            <label className='question-file-upload'>
              <input ref={fileRef} type='file' style={{ display: "none" }} />
              Upload File
            </label>
            <span style={{ color: "#999" }}>
              {fileRef?.current?.files[0].name}
            </span>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "flex-end" }}>
        <button
          style={{
            background: "#666",
            color: "#FFF",
            padding: "1rem 2rem",
            margin: "1rem",
            border: "none",
          }}
          className='button'>
          Save Draft
        </button>
        <button
          className='button'
          style={{
            padding: "1rem 2rem",
            margin: "1rem",
            border: "none",
            background: "var(--color-primary)",
            color: "#FFF",
          }}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default CourseAssignment;
