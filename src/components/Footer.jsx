import React from 'react'
import "./Footer.css"
import { FaFacebook, FaGithub, FaHome, FaMailBulk, FaPhone } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa6'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaHome size={20} style={{color:"#fff" ,marginRight:"2rem"}}/>
            <div>
              <p>scheme no 78 vijaynagar.</p>
              <p>indore.</p>
            </div>
          </div>
          <div className='phone'>
            <h4><FaPhone size={20} style={{color:"#fff" ,marginRight:"2rem"}}/>  
            8821956022</h4>
          </div>
          <div className='email'>
            <h4><FaMailBulk size={20} style={{color:"#fff" ,marginRight:"2rem"}}/>  
            neeraj55gupta@gmail.com</h4>
          </div>
        </div>
        <div className='right'>
          <h4>Let's Talk...</h4>
          <p>"I am open to new opportunities and ready to collaborate on exciting projects. Let’s connect and create something amazing together!"
          </p>
          <div className='social'>
            <a href="www.linkedin.com/in/neeraj-gupta-a6149483" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn size={20} style={{color:"#fff" ,marginRight:"2rem"}}/>  
            </a>
            <a href="https://github.com/neeraj55gupta" target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} style={{color:"#fff" ,marginRight:"2rem"}}/>  
            </a>
            <FaFacebook size={20} style={{color:"#fff" ,marginRight:"2rem"}}/>  
          </div>
        </div>
      </div>
    </div>
  )
}
