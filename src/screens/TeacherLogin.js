import React, { useContext, useState } from "react";
import { users } from "../data/users";
import { GlobalContext } from "../context/GlobalContext";
import { useParams, useHistory } from "react-router-dom";
import { useLocalStorage } from "react-use";
import Loader from "react-loader-spinner";
const TeacherLogin = () => {
  const { isLogggedIn, setIsLoggedIn, setInstructor, setUser } =
    useContext(GlobalContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useHistory();
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setInstructor(true);
    await fetch(`https://chalkboard-api.herokuapp.com/instructors/${email}`)
      .then((res) => {
        return res.json();
      })
      .then((user) => {
        if (user.email === email && user.password === password) {
          setIsLoggedIn(true);

          setUser(user);
          navigate.push(`/${user._id}/instructor/dashboard`);
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch((err) => console.log({ error: err }));
  };

  return (
    <div className='login-page'>
      <h1>Login as Instructor</h1>
      <form className='login-form' onSubmit={submitHandler}>
        <div className='input'>
          <label className='login-label' for='email'>
            Email
          </label>
          <input
            className='login-input'
            required
            value={email}
            type='email'
            name='email'
            id='email'
            onChange={(e) => setEmail(e.target.value)}
            placeholder={"Email"}
          />
        </div>
        <div className='input'>
          <label className='login-label' for='password'>
            Password
          </label>
          <input
            required
            type='password'
            name='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='login-input'
            placeholder={"Password"}
          />
        </div>
        <div
          style={{
            alignSelf: "flex-start",
            marginLeft: "1rem",
            marginBottom: "2rem",
            display: "flex",
            alignItems: "center",
          }}>
          <input
            style={{ marginRight: "1rem" }}
            type='checkbox'
            checked={remember}
            onChange={() => setRemember(!remember)}
            id='remember'
          />

          <label htmlFor='remember'>Remeber me</label>
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
          <input className='button login-submit ' type='submit' value='Login' />
        )}
      </form>
    </div>
  );
};

export default TeacherLogin;
