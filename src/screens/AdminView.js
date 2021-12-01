import React, { useEffect, useState } from "react";
import "../styles/admin.css";
const AdminView = () => {
  const [users, setUsers] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);
  async function instructorCall() {
    setLoading(true);
    instructors.length === 0
      ? await fetch("https://chalkboard-api.herokuapp.com/instructors")
          .then((res) => res.json())
          .then((data) => {
            setInstructors(data);
            setLoading(false);
          })
      : setLoading(false);
  }
  useEffect(() => {
    (async function () {
      await fetch("https://chalkboard-api.herokuapp.com/users")
        .then((res) => res.json())
        .then((data) => {
          setUsers(data);
          setLoading(false);
        });
    })();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        maxWidth: "150rem",
        minWidth: "50rem",
        margin: "2rem",
      }}>
      <ul className='tabs' role='tablist'>
        <li>
          <input type='radio' name='tabs' id='tab1' defaultChecked />
          <label
            htmlFor='tab1'
            role='tab'
            aria-selected='true'
            aria-controls='panel1'
            tabIndex={0}>
            Students
          </label>
          <div
            id='tab-content1'
            className='tab-content'
            role='tabpanel'
            aria-labelledby='description'
            aria-hidden='false'>
            {loading ? (
              <p>Loading...</p>
            ) : (
              users.map((user) => {
                return (
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex" }}>
                      <span className='content-head'>Student Id</span>
                      <span>{user._id}</span>
                    </div>
                    <div style={{ display: "flex" }}>
                      <span className='content-head'>Student Name</span>
                      <span>{`${user.fName} ${user.lName}`}</span>
                    </div>
                    <div style={{ display: "flex" }}>
                      <span className='content-head'>Student Email</span>
                      <span>{user.email}</span>
                    </div>
                    <div style={{ display: "flex" }}>
                      <span className='content-head'>Student Password</span>
                      <span>{user.password}</span>
                    </div>

                    <hr style={{ width: "100%" }} />
                  </div>
                );
              })
            )}
          </div>
        </li>
        <li>
          <input type='radio' name='tabs' id='tab2' />
          <label
            htmlFor='tab2'
            role='tab'
            onClick={instructorCall}
            aria-selected='false'
            aria-controls='panel2'
            tabIndex={0}>
            Instructors
          </label>
          <div
            id='tab-content2'
            className='tab-content'
            role='tabpanel'
            aria-labelledby='specification'
            aria-hidden='true'>
            {loading ? (
              <p>Loading...</p>
            ) : (
              instructors.map((instructor) => {
                return (
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex" }}>
                      <span className='content-head'>Instructor Id</span>
                      <span>{instructor._id}</span>
                    </div>
                    <div style={{ display: "flex" }}>
                      <span className='content-head'>Instructor Name</span>
                      <span>{`${instructor.fName} ${instructor.lName}`}</span>
                    </div>
                    <div style={{ display: "flex" }}>
                      <span className='content-head'>Instructor Email</span>
                      <span>{instructor.email}</span>
                    </div>
                    <div style={{ display: "flex" }}>
                      <span className='content-head'>Instructor Password</span>
                      <span>{instructor.password}</span>
                    </div>

                    <hr style={{ width: "100%" }} />
                  </div>
                );
              })
            )}
          </div>
        </li>
        <li>
          <input type='radio' name='tabs' id='tab3' />
          <label
            htmlFor='tab3'
            role='tab'
            aria-selected='false'
            aria-controls='panel3'
            tabIndex={0}>
            Courses
          </label>
          <div
            id='tab-content3'
            className='tab-content'
            role='tabpanel'
            aria-labelledby='specification'
            aria-hidden='true'>
            Courses
          </div>
        </li>
      </ul>
    </div>
  );
};

export default AdminView;
