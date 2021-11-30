import React from "react";
import { Link } from "react-router-dom";
import Hero from "../assets/images/hero.jpg";
const HomePage = () => {
  return (
    <main style={{ width: "100vw", position: "relative" }}>
      <section className='hero' style={{ width: "100%", overflowX: "hidden" }}>
        <div
          style={{
            position: "relative",
            backgroundColor: "#000",
            zIndex: "200",
          }}>
          <div
            className='hero-container'
            style={{
              backgroundImage: `url(${Hero})`,
              width: "100vw",
              height: "100vh",
              resize: "both",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundColor: "rgba(0,0,0,0.7)",
              backgroundBlendMode: "overlay",
              color: "#e5e5e5",
              textAlign: "center",
            }}>
            <div className='hero-content'>
              <h1 style={{ margin: 0, marginBottom: "2rem", color: "#fff" }}>
                Heloo World
              </h1>
              <p style={{ padding: 0, margin: 0 }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
                cupiditate!
              </p>
              <Link to='browse' className='button browse-btn'>
                Browse Courses
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className='feature' style={{ marginTop: "30px" }}>
        <h1 style={{ textAlign: "center" }}>What we Offer</h1>
        <p style={{ textAlign: "center" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
          eum praesentium asperiores. Itaque magnam asperiores delectus velit
          facere ea natus dolor, esse tempora sed totam, provident numquam
          molestias laborum voluptatibus placeat saepe atque officia maiores
          vero nemo quibusdam architecto? Est?
        </p>
        <div className='offers'>
          <div></div>
        </div>
      </section>
      <section className='services'></section>
      <section className='instructor'></section>
    </main>
  );
};

export default HomePage;
