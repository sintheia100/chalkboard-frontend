import React, { useState } from "react";
import { Link } from "react-router-dom";
import CourseImage from "../assets/images/coding.jpg";
const Course = ({ title, imgUrl, link, info, instructors }) => {
  return (
    <div className='course-card'>
      <Link to={link || "course"}>
        <img src={CourseImage} alt='Course' className='course-image' />
      </Link>
      <Link to={link} className='course-link'>
        {title}
      </Link>
      <div className='course-instructors'>{instructors.join(", ")}</div>
      <p className='course-info'>{info}</p>
    </div>
  );
};

export default Course;
