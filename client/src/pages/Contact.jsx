import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

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
    let response = await fetch("http://localhost:5000/api/contact/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    

    let result = await response.json();
    // alert("Successfully Sent! We will reach you as fast as we can!!");
    alert(result);

  };
  return (
    <div>
    <Announcement />
    <Navbar />
    <form onSubmit={handleSubmit}><center>

        <h1>Contact Us</h1>
      <div ><center>
        <label htmlFor="username">Name:</label>
        <input type="text" id="username" required />
      </center></div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
      </div>
      <div>
        <label htmlFor="desc">Message:</label>
        <textarea id="desc" required />
      </div>
      <button type="submit">{status}</button>
      </center></form>
    <Newsletter/>
    <Footer/>
  </div>

  );
};

export default Contact;