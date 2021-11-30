import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import Loader from "react-loader-spinner";

const Signup = () => {
  const navigate = useHistory();
  //const user = JSON.parse(localStorage.getItem("user"));
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [instructorBox, setInstructorBox] = useState(false);
  const { isLoggedIn, setIsLoggedIn, setUser, setInstructor, user } =
    useContext(GlobalContext);
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setDisable(true);
    setLoading(true);
    await fetch(
      instructorBox
        ? "https://chalkboard-api.herokuapp.com/instructors/add"
        : "https://chalkboard-api.herokuapp.com/users/add_user",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          fName: fName,
          lName: lName,
          email: email,
          password: password,
        }),
        mode: "cors",
      }
    )
      .then((message) => {
        return message.json();
      })
      .then((data) => {
        if (data.status === 200) {
          setUser(data.response);
          setIsLoggedIn(true);
          instructorBox && setInstructor(true);
          instructorBox &&
            navigate.push(`/${data.response._id}/instructor/dashboard`);
          instructorBox === false &&
            navigate.push(`/${data.response._id}/dashboard`);
        }
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <h1>Sign up</h1>
      <form
        onSubmit={onSubmitHandler}
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}>
        <div className='input'>
          <label htmlFor='f-name'>First Name</label>
          <input
            type='text'
            className='login-input'
            name='f-name'
            id='f-name'
            placeholder={"First Name"}
            required
            disabled={disable}
            value={fName}
            onChange={(e) => setFName(e.target.value)}
          />
        </div>
        <div className='input'>
          <label htmlFor='l-name'>Last Name</label>
          <input
            className='login-input'
            type='text'
            name='l-name'
            id='l-name'
            disabled={disable}
            placeholder={"Last Name"}
            value={lName}
            onChange={(e) => setLName(e.target.value)}
            required
          />
        </div>
        <div className='input'>
          <label htmlFor='email'>Email</label>
          <input
            className='login-input'
            type='email'
            name='f-name'
            id='email'
            disabled={disable}
            placeholder={"Email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='input'>
          <label htmlFor='password'>Password</label>
          <input
            required
            type='password'
            className='login-input'
            name='password'
            id='password'
            value={password}
            disabled={disable}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={"Password"}
          />
        </div>
        <div className='input'>
          <label htmlFor='cpassword'>Confirm Password</label>
          <input
            required
            type='password'
            className='login-input'
            name='password'
            id='cpassword'
            disabled={disable}
            placeholder={"Confirm Password"}
            value={cPassword}
            onChange={(e) => setCPassword(e.target.value)}
          />
        </div>
        <div style={{ alignSelf: "flex-start", marginBottom: "2rem" }}>
          <input
            checked={instructorBox}
            type='checkbox'
            className=''
            name='password'
            id='cpassword'
            disabled={disable}
            value={cPassword}
            onChange={(e) => setInstructorBox(!instructorBox)}
          />
          <label style={{ marginLeft: "1rem" }} htmlFor='cpassword'>
            Are you an instructor?
          </label>
        </div>
        {loading ? (
          <Loader
            className='button login-submit '
            color='#333'
            height={30}
            width={50}
            type='ThreeDots'
          />
        ) : (
          <input
            type='submit'
            value='Sign up'
            className='button signup'
            style={{ marginBottom: "2rem" }}
          />
        )}
      </form>
    </div>
  );
};

export default Signup;
