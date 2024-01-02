import React from 'react'
import "../styles/contact.css" 

const Contact = () => {
  return (
    <>
        <form action="/submit" method="post">
            
            <div className="contact-me">
                <div className="contact">
                    <span className="title">
                        Contact Me
                    </span>
                </div>
            <label htmlFor="name">Name</label><br />
            <input type="text" id='name' placeholder="Your Name" name='name' /><br />
            <label htmlFor="email">Email</label><br />
            <input type="text" id='email' placeholder='Your Email' name='email'/><br />
            <label htmlFor="message">Message</label><br />
            <input type="text" id='message' placeholder='your message' name='mesaage'/><br />
            <button type="button" id='send'>Submit</button>
            </div>
        </form>
    </>
  )
}

export default Contact
