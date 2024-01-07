import "../styles/home.css" 
import React from 'react'
import Typewriter from "typewriter-effect" ;
import myPic from "../assets/home-my.png" ;

const Home = () => {
    const emailAddress = "anant211205@gmail.com"
    const mailtoLink = `mailto:${emailAddress}`;
  return (
    <>
        <div id="home">
            <section>
                <p>Hi I am, </p> <br /><h1>Anant Kumar</h1> 

                <Typewriter options={{
                    strings: ["A Frontend Developer" , "A Designer" , "A Student"] ,
                    loop: true ,
                    autoStart : true ,
                    wrapperClassName : "typewriter",
                    cursor: "" ,
                    deleteSpeed : 30,
                    pauseFor: 1000
                }}/>    

                <a href={mailtoLink}><button>HIRE ME</button></a>
                
                {/* <button><a href="#projects">PROJECTS</a></button> */}
                                
            </section>

            <section>
                <img src={myPic} alt="myPic" />
            </section>

            
        </div>
    </>
  )
}

export default Home
