import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Announcement from "../../components/Announcement";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Newsletter from "../../components/Newsletter";
// import styled from "styled-components";
import "./faq.css";
//import {Helmet} from "react-helmet";

const Faq = () => {

    return (
        <div>
        <Announcement />
        <Navbar />
    
        <body1>
<div class="box">
   <p class="heading">Frequently Asked Questions</p>
   <div class="faqs">
      <details>
         <summary>What Categories of products our website offer?</summary>
         <p1 class="text">We offer various types of fresh vegetables, fruits and dairy products</p1>
      </details>
      <details>
         <summary>How to checkout the products in my cart?</summary>
         <p1 class="text">Yes! Kindly log in before adding your products in the cart. If your are a new user please sign up to proceed further. You can also call us on our helpline for more assistance.</p1>
      </details>
      <details>
         <summary>What is the delivery charge for the order?</summary>
         <p1 class="text">We offer free Delivery charges for any type of order.</p1>
      </details>
      <details>
         <summary>When will the product be delivered after the checkout?</summary>
         <p1 class="text">It generally takes 1 to 2 weeks to deliver the product after the checkout.</p1>
      </details>
      <details>
         <summary>Do you provide additional support?</summary>
         <p1 class="text">Chat and email support is available 24/7. Phone lines are open during normal business hours.</p1>
      </details>
   </div>
</div>

</body1>
        {/* <Newsletter/> */}
        <Footer/>
      </div>
    
      );
    };
export default Faq;