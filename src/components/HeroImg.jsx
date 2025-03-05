import "./HeroImg.css";
import React from 'react'
import IntroImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom";

export default function HeroImg() {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg}/>
        </div>
        <div className="content">
            <p>HI, I'M Neeraj Gupta.</p>
            <h1>React Developer.</h1>
            <div>
                <Link to="/Project" className="btn">Projects</Link>
                <Link to="/Contact" className=" btn btn-light">Contact</Link>
            </div>
        </div>  
      
    </div>
  )
}
