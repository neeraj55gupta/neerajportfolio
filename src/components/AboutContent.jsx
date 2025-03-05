import React from "react";
import "./AboutContent.css";
import { Link } from "react-router-dom";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.webp";

export default function AboutContent() {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>

        <p>
          Hi, I'm Neeraj, a passionate Frontend Developer with expertise in
          React.js, JavaScript, HTML, CSS, and Bootstrap. I specialize in
          building interactive, responsive, and user-friendly web applications
          with a strong focus on modern design and seamless user experiences. My
          journey into frontend development began with a deep curiosity about
          web technologies, leading me to refine my skills through hands-on
          projects and a certification in frontend development from The Prime
          Step, Indore. Over time, I have worked on various real-world projects,
          including a news website, a learning management system, and a web app
          utilizing a Free Image API. My recent project is Edusity Educational
          website has strengthened my ability to develop scalable and
          high-performance web applications.
        </p>

        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className="img" alt="true" />
          </div>

          <div className="img-stack bottom">
            <img src={React2} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
}
