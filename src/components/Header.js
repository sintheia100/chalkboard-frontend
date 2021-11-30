import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ChalkBoardLogo from "../assets/images/chalkboard.png";
import { GlobalContext } from "../context/GlobalContext";
const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [userId, setUserId] = useState("userId");

  const { isLoggedIn, setIsLoggedIn, mobile, instructor, setInstructor } =
    useContext(GlobalContext);

  const [display, setDisplay] = useState("none");
  const navigate = useHistory();
  const loggedOutHandler = () => {
    setIsLoggedIn(false);
    setInstructor(false);
    localStorage.removeItem("user");
    navigate.push("/");
  };
  useEffect(() => {
    setUserId(() => user !== null && user._id);
  }, [user, userId]);
  const menuHandler = () =>
    setDisplay(() => (display === "none" ? "flex" : "none"));
  return (
    <header className='.container-header'>
      <nav className='header'>
        <div
          aria-describedby='Website Logo and Browse Link'
          className='header-left'>
          <Link to='/'>
            <img src={ChalkBoardLogo} alt='Chalkboard' className='logo-image' />
          </Link>
          <Link
            style={{ display: mobile && "none" }}
            to='/browse'
            className='links browse'>
            Browse Courses
          </Link>
          {isLoggedIn && (
            <Link
              style={{ display: mobile && "none" }}
              to={
                instructor
                  ? `/${userId}/instructor/dashboard`
                  : `/${userId}/dashboard`
              }
              className='links browse'>
              Dashboard
            </Link>
          )}
        </div>

        {isLoggedIn === false ? (
          <div
            style={{ display: "flex", alignItems: "center" }}
            aria-label='SignIn and Signup Links'>
            <Link to='/login' className='button login'>
              Login
            </Link>
            <Link
              style={{ display: mobile && "none" }}
              to='/signup'
              className='button signup'>
              Signup
            </Link>
            {mobile ? (
              <button
                style={{ background: "none", border: "none" }}
                onClick={menuHandler}>
                <span class='fas fa-bars'></span>
              </button>
            ) : (
              <div></div>
            )}
          </div>
        ) : (
          <div>
            <div>
              {/* <span>{user.firstName + " " + user.lastName}</span> */}
              <button
                style={{
                  border: "none",
                  background: "#333",
                  color: "#fff",
                  borderRadius: "10rem",
                }}
                onClick={loggedOutHandler}
                className='button'>
                Log Out
              </button>
            </div>
          </div>
        )}
      </nav>
      {mobile && (
        <nav
          style={{
            display: display,

            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem 0",
          }}>
          <Link
            style={{ margin: "1rem 0" }}
            to='browse'
            className='links browse'>
            Browse Courses
          </Link>
          <Link
            style={{ margin: "1rem 0" }}
            to='signup'
            className='button signup'>
            Signup
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
