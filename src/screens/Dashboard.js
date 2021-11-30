import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Dashboard = () => {
  const [translate, setTranslate] = useState("-50rem");
  const [width, setWidth] = useState("0rem");
  const location = useLocation();
  const [menu, setMenu] = useState({
    dashboard: "",
    assignments: "",
    notes: "",
  });
  const menuHandler = () => {
    setTranslate(() => (translate === "0rem" ? "-50rem" : "0rem"));
    setWidth(() => (width === "0rem" ? "30rem" : "0rem"));
  };
  return (
    <div style={{ display: "flex" }}>
      <nav
        className='sidebar'
        style={{
          transform: `translateX(${translate})`,
          display: "flex",
          width: width,
          backgroundColor: "#444",
          height: "100vh",
        }}>
        <div className='nav-items'>
          <div
            onClick={() =>
              setMenu({ dashboard: "active", assignments: "", notes: "" })
            }
            className={`nav-item ${menu.dashboard}`}>
            <i class='fas fa-home'></i>
            <Link style={{ marginLeft: "2rem" }} to='dashboard'>
              Dashboard
            </Link>
          </div>
          <div
            onClick={() =>
              setMenu({ dashboard: "", assignments: "active", notes: "" })
            }
            className={`nav-item ${menu.assignments}`}>
            <i class='fas fa-clipboard    '></i>
            <Link style={{ marginLeft: "2rem" }} to='assignments'>
              Assignments
            </Link>
          </div>
          <div
            onClick={() =>
              setMenu({ dashboard: "", assignments: "", notes: "active" })
            }
            className={`nav-item ${menu.notes}`}>
            <i class='fa fa-sticky-note' aria-hidden='true'></i>
            <Link style={{ marginLeft: "2rem" }} to='notes'>
              Notes
            </Link>
          </div>
        </div>
      </nav>
      <div style={{ width: "100vw", overflow: "auto" }}>
        <button
          onClick={menuHandler}
          style={{
            alignSelf: "flex-start",
            background: "none",
            border: "none",
            cursor: "pointer",
            margin: "2rem",
          }}>
          <i
            style={{ fontSize: "2rem !important" }}
            class='fa fa-bars'
            aria-hidden='true'></i>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
