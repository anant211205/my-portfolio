import React from 'react'
import logo from "../assets/logo.png"; 
import { content } from '../assets/data';
import "../styles/footer.css"
import { AiOutlineLinkedin} from "react-icons/ai";

function EmailButton()  {

    const con = content.map(cont => 
            <>
            <h2 key={cont.id}>
                {cont.footContent}
            </h2>
            <p>&copy;{cont.copyright}</p>
            </>
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
    <footer>
        <div className="logo">
            <img src={logo} alt="logo" />
            <EmailButton/>  
        </div>
        <div className="content-right">
            <a href="https://www.linkedin.com/in/anant-kumar-07b53b24a/" target='blank'>
                <AiOutlineLinkedin />
            </a>
        </div>
    </footer>
    </>
  )
}

export default Footer
