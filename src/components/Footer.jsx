import React from 'react'
import logo from "../assets/logo.png"; 
import { content } from '../assets/data';
import "../styles/footer.css"
import { AiOutlineLinkedin} from "react-icons/ai";

function EmailButton()  {

    const con = content.map(cont => 
            <span key={cont.id}>
                {cont.footContent} <br />
                &copy;{cont.copyright}
            </span>
        ) 
    return(
        <>
            {con}
        </>
    )
} 

const Footer = () => {

  return (
    <>
    <div className='footer'>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
            <div className="content">
                <EmailButton/>

                <div className="content-right">
                    <a href="https://www.linkedin.com/in/anant-kumar-07b53b24a/" target='blank'>
                        <AiOutlineLinkedin />
                    </a>
            </div>
        </div>
        
    </div>
    </>
  )
}

export default Footer
