import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
// import styled from "styled-components";
import "./privacy.css";


const Privacy = () => {
    return (
        <div>
        <Announcement />
        <Navbar />
    
        <body>
        <div class="privacy-page-top">Green Grocery</div>
    <div class="privacy-page-body">
        <div class="privacy-content">
            <div class="privacy-page-title">Privacy Policy</div>
            <div class="privacy-paragraph-heading">Privacy Statement</div>
            <div class="privacy-paragraph-body privacy-paragraph-text">Green Grocery is committed to protecting your privacy and developing technology that gives you the most powerful and safe online experience. This Statement of Privacy applies to the Green Grocery website and governs data collection and usage. By
                using our website, you consent to the data practices described in this statement.</div>
            <div class="privacy-paragraph-heading">Collection of your Personal Information</div>
            <div class="privacy-paragraph-body privacy-paragraph-text-followed">When you visit our Website, and make a purchase or attempt to make a purchase through our Website, we also collect certain information from you, including your name, billing address, shipping address, payment information, email address, and
                phone number.
            </div>
            <div class="privacy-paragraph-body privacy-paragraph-text">We will only collect and process data about you where we have a lawful basis. Lawful bases include where you have given consent, where processing is necessary for the delivery of product you have ordered through our website and other “legitimate
                interests.” Where we rely on your consent to process Data, you have the right to withdraw or decline your consent at any time and where we rely on legitimate interests, you have the right to object.</div>
            <div class="privacy-paragraph-heading">Use of your Personal Information</div>
            <div class="privacy-paragraph-body privacy-paragraph-text-followed">The Data we collect from customers is used to fulfill orders placed through our Website, which includes the processing of payment information, preparing orders for shipment, and providing order confirmations and other order-related communication.
                In addition, we’ll use Data from your visit to our Website to improve and optimize the customer experience, to screen for potential risk and fraud, to provide the most relevant advertisements and email communications to you, and to assess
                the success of our current marketing and advertising book campaigns.</div>
            <div class="privacy-paragraph-body privacy-paragraph-text">We will only collect and process Data about you where we have a lawful basis. Lawful bases include where you have given consent, where processing is necessary for the delivery of the product you have ordered through our Website and other “legitimate
                interests.” Where we rely on your consent to process Data, you have the right to withdraw or decline your consent at any time and where we rely on legitimate interests, you have the right to object. </div>
            <div class="privacy-paragraph-heading">Use of Cookies</div>
            <div class="privacy-paragraph-body privacy-paragraph-text-followed">Our Web site use "cookies" to help you personalize your online experience. A cookie is a text file that is placed on your hard disk by a Web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are
                uniquely assigned to you, and can only be read by a web server in the domain that issued the cookie to you.</div>
            <div class="privacy-paragraph-body privacy-paragraph-text-followed">One of the primary purposes of cookies is to provide a convenience feature to save you time. The purpose of a cookie is to tell the Web server that you have returned to a specific page. For example, if you personalize Green Grocery pages, or
                register with our services, a cookie helps us to recall your specific information on subsequent visits. This simplifies the process of recording your personal information, such as billing addresses, shipping addresses, and so on. When
                you return to the same Green Grocery Web site, the information you previously provided can be retrieved, so you can easily use the features that you customized.</div>
            <div class="privacy-paragraph-body privacy-paragraph-text">You have the ability to accept or decline cookies. Most Web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer. If you choose to decline cookies, you may not be able to
                fully experience the interactive features of the Green Grocery website or any web sites you visit.
            </div>
            <div class="privacy-paragraph-heading">Security of your Personal Information</div>
            <div class="privacy-paragraph-body privacy-paragraph-text">Green Grocery secures your personal information from unauthorized access, use or disclosure. We also secure the personally identifiable information you provide on computer servers in a controlled, secure environment, protected from unauthorized
                access, use or disclosure. When personal information (such as a credit card number) is transmitted to other Web sites, it is protected through the use of encryption, such as the Secure Socket Layer (SSL) protocol.</div>
            <div class="privacy-paragraph-heading">Changes to this Statement</div>
            <div class="privacy-paragraph-body privacy-paragraph-text">We will occasionally update this Statement of Privacy to reflect company and customer feedback. We also encourage you to periodically review this Statement to be informed of how Green Grocery is protecting your information.
            </div>
            {/*  <div class="privacy-paragraph-heading">Contact Information</div>
            <div class="privacy-paragraph-body privacy-paragraph-text">
                <p>Green Grocery welcomes your comments regarding this statement of Privacy. If you believe that Green Grocery has not adhered to this statement, please contact us at <a style="text-decoration: none;" href="mailto:bookspace30@gmail.com">bookspace30@gmail.com</a>                    or bookspace.com. We will use commercially reasonable efforts to promptly determine and remedy the problem.</p>
            </div> */ }
        </div>
        <div class="privacy-policy-nav-menu">
            <ul class="privacy-nav-menu-wrapper">
                <li class='privacy-nav-menu1'><a href="" class="privacy-policy-link">Privacy
                                                Policy </a></li>
                <li class="privacy-nav-menu2"><a href="/license" class="site-map-link">License</a>
                </li>
            </ul>
        </div>
    </div>
      
    </body>
        
        {/* <Newsletter/> */}
        <Footer/>
      </div>
    
      );
    };
export default Privacy;