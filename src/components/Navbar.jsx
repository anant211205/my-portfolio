import React from 'react'
import "../styles/navbar.css"
import { AiOutlineLinkedin , AiOutlineGithub , AiOutlineInstagram } from "react-icons/ai";
// import { AiOutlineMenu } from "react-icons/ai";

import logo from "../assets/logo.png" ;

const Navbar = () => {

  return (
    <>
        <header className="nav">
            <div className="nav-items">
                <div className="nav-left">
                    <a href="#home">
                        <img src={logo} alt="logo"/>
                    </a>
                </div>
                <div className="nav-right">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                    </div>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/__4n4nt/" target='blank'> 
                            <AiOutlineInstagram className='icon'/>
                        </a>
                        <a href="https://github.com/anant211205" target='blank'>
                            <AiOutlineGithub className='icon'/>
                        </a>
                        <a href="https://www.linkedin.com/in/anant-kumar-07b53b24a/" target='blank'>
                            <AiOutlineLinkedin className='icon'/>
                        </a>
                    </div>
                
            </div>
        </header>
    </>
  )
}

export default Navbar
