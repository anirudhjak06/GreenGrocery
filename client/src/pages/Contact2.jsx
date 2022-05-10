import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import Newsletter from "../components/Newsletter";
// import styled from "styled-components";
import "./contact.css";


const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { username, email, desc } = e.target.elements;
    let details = {
        username: username.value,
      email: email.value,
      desc: desc.value,
    };
    let response = await fetch("/api/contact/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    // eslint-disable-next-line
    let result = await response.json();
    alert("Successfully Sent! We will reach you as fast as we can!!"); 

    // let result = await response.json();
    // alert();
  };
  return (
    <div>
    <Announcement />
    <Navbar />

    <body1>
  <div class="wrapper">
    <header><center>Send us a Message</center></header>
    <form onSubmit={handleSubmit}>
      <div class="dbl-field">
        <div class="field">
          <input type="text" name="username" htmlFor="username" id="username" placeholder="Enter your name" required></input>
          <i class='fas fa-user'></i>
        </div>
        <div class="field">
          <input type="email" name="email" htmlFor="email" id="email" placeholder="Enter your email" required></input>
          <i class='fas fa-envelope'></i>
        </div>
      </div>
      <div class="message">
        <textarea placeholder="Write your message" htmlFor="desc" id="desc" name="desc" required></textarea>
        <i class="material-icons"></i>
      </div>
      <div class="button-area"><center>
        <button type="submit">{status}</button>
        {/* <span></span> */}</center>
      </div>
    </form>
  </div>
</body1>
    
    {/* <Newsletter/> */}
    <Footer/>
  </div>

  );
};

export default Contact;