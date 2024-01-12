import React, { useEffect, useState } from 'react'
import "../styles/navbar.css"
import { AiOutlineLinkedin , AiOutlineGithub , AiOutlineInstagram } from "react-icons/ai";
// import { AiOutlineMenu } from "react-icons/ai";

import logo from "../assets/logo.png" ;

const Navbar = () => {

  return (
    <>
        <NavContent/>
    </>
  )
}

export default Navbar


const NavContent = () => {

    const[navbarOpaque , isNavbarOpaque] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            isNavbarOpaque(window.scrollY) ;
        } ;
        window.addEventListener('scroll' , handleScroll) ;

      return () => {
        window.removeEventListener('scroll' , handleScroll) ;
      }
    }, [])


    // const scrollToSection = (id) => {
    //     if(id = "home"){
    //         window.scrollTo({top : 0 , behavior:'smooth'})
    //     }
    // }

    return(
    <>
        <header className={`nav ${navbarOpaque ? "opaque" : "" }`}>
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
