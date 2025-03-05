import React from "react";
import "./WorkCard.css";
import Pro1 from "../assets/project1.png";
import Pro2 from "../assets/project2.jpeg";  
import { NavLink } from "react-router-dom";

export default function WorkCard() {
  return (
    <div className="work-container">
      <h1 className="project-heading">projects</h1>
      <div className="project-container">
       
        <div className="project-card">
          <img src={Pro1} />
          <h2 className="project-title">Edusity/Educational website</h2>
          <div className="project-details">
            <p>
              Edusity is an online learning platform where students can learn
              from the best teachers and can get the best education. It is a
              platform where students can learn from the best teachers and can
              get the best education. It is a platform where students can learn
              from the best teachers and can get the best education.
            </p>
            <div className="pro-btns">
              <NavLink to="https://edusity-umber-eight.vercel.app/" className="btn">View</NavLink>
              <NavLink to="https://github.com/neeraj55gupta" className="btn">Source</NavLink>
            </div>
          </div>
        </div>
<br/>
<br/>
<br/>

<br/> 
       
        <div className="project-card">
          <img src={Pro2} />
          <h2 className="project-title">Medical Healthcare website</h2>
          <div className="project-details">
            <p>
            MedCare is a digital platform designed to simplify healthcare management. It allows patients to manage appointments, access medical records, and communicate with healthcare providers, while professionals can efficiently track patient history, write prescriptions, and offer virtual consultations. With a focus on ease of use, MedCare enhances both patient and provider experiences, ensuring secure and streamlined healthcare services.


            </p>
            <div className="pro-btns">
              <NavLink to="https://medical-healthcare-nine.vercel.app/" className="btn">View</NavLink>
              <NavLink to="https://github.com/neeraj55gupta" className="btn">Source</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
