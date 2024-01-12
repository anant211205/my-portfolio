import React from "react";
import "../styles/contact.css";
import { useState } from "react";
import hi from "../assets/hi.jpg";
import toast from "react-hot-toast";

const Contact = () => {
  // const [submit, setSubmit] = useState(false)

  // function handleClick (){
  //         alert("submited")
  // }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = (e) => {
    console.log(name, email, message);
    // alert("your message sent")
    toast.success("message sent successfully");
  };

  return (
    <>
      <div id="contact">
        <div className="contact-me">
          <form action="/submit" method="post">
            <span className="title"> Contact Me </span>
            {/* <label htmlFor="name">Name</label><br /> */}
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              value={name}
              required
            />
            {/* <label htmlFor="email">Email</label><br /> */}
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Your Email"
              required
            />
            {/* <label htmlFor="message">Message</label><br /> */}
            <input
              type="text"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              placeholder="your message"
              required
            />
            <button type="button" onClick={handleClick}>
              Submit
            </button>
          </form>
        </div>
        <aside>
          <img src={hi} alt="img" />
        </aside>
      </div>
    </>
  );
};

export default Contact;
