import React, { useContext, useEffect, useState } from "react";
import { users } from "../data/users";
import { GlobalContext } from "../context/GlobalContext";
import { useParams, useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";
const StudentLogin = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [remember, setRemember] = React.useState(false);
  const { isLoggedIn, setIsLoggedIn, setUser } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);
  const navigate = useHistory();
  const params = useParams();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    await fetch(`https://chalkboard-api.herokuapp.com/users/${email}`)
      .then((res) => {
        return res.json();
      })
      .then((user) => {
        if (user.email === email && user.password === password) {
          setIsLoggedIn(true);
          setUser(user);

          navigate.push(`/${user._id}/dashboard`);
        } else {
          localStorage.setItem("isLoggedIn", false);
        }
      })
      .catch((err) => console.log({ error: err }));
  };

  return (
    <div className='login-page'>
      <h1>Login as Student</h1>
      <form className='login-form' onSubmit={submitHandler}>
        <div className='input'>
          <label className='login-label' htmlFor='email'>
            Email
          </label>
          <input
            className='login-input'
            value={email}
            type='email'
            name='email'
            id='email'
            onChange={(e) => setEmail(e.target.value)}
            placeholder={"Email"}
          />
        </div>
        <div className='input'>
          <label className='login-label' htmlFor='password'>
            Password
          </label>
          <input
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

          <label htmlFor='remember'>Remember me</label>
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

export default StudentLogin;
