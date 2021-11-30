import React, { useEffect } from "react";
import {
  BrowserRouter,
  Link,
  useMatch,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Login = () => {
  const mobile = useMediaQuery({
    maxWidth: "650px",
  });

  return (
    <div className='login-container'>
      <h1>Login</h1>
      <div
        style={{ flexDirection: mobile ? "column" : "row" }}
        className='login-info'>
        <div className='login-std login-block'>
          <h3 className='login-heading'>Login as Student</h3>
          <Link className='login-student' to='/login/student'>
            Login as Student
          </Link>
        </div>
        <hr
          style={{
            height: mobile ? "1px" : "auto",
            width: mobile ? "1px" : "auto",
          }}
        />
        <div className='login-ins login-block'>
          <h3 className='login-heading'>Login as Instructor</h3>
          <Link className='login-student' to='/login/instructor'>
            Login as instructor
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
