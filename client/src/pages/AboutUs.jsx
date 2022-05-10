import {
	Facebook,
	Instagram,
	MailOutline,
	Phone,
	Pinterest,
	Room,
	Twitter,
  GitHub,
  } from "@material-ui/icons";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import Newsletter from "../components/Newsletter";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./aboutus.css";
const Button = styled.button`
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;

    padding: 10px;
    color:white;
    cursor: pointer;
    font-weight: 600;
    border-style: solid;
    border-color: coral;
  border-width: 2px;
    border-radius: 5%;
    transition: all 0.5s ease;
  &:hover {
    background-color: coral;
    transform: scale(1.1);
  }
`;
const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const ImgContainer = styled.div`
 border-radius: 1.5%;
  padding-top:30px;
  height: 100%;
  width: 70%;
  flex: 1;
  padding-bottom:30px;
`;



const Privacy = () => {
    return (
        <div>
        <Announcement />
        <Navbar />
    
    <body>
	<div class="section">
		<div class="container1">
			<div class="content-section">
				<div class="title">
					<h1>About Us</h1>
				</div>
				<div class="content1">
					{/* <h3>LsdaaasASDADSSADSADADdorem ipsum dolor sit amet, consectetur adipisicing</h3> */}
					<p>In these present situations, it
is difficult for farmers to sell
their products at a fair price in
markets. Customers are
buying hybrid fruits and
vegetables which are not good
for health which contains
harmful substances.
Customers are buying
products at high price than
market price.</p>

<p>With the help of this website farmers can sell fruits,
vegetables and dairy
products at fair market
prices on our website
and customers can buy
directly organic products
from farmers through the
website which are fresh
and healthy for the body.</p>
                    
						<ImgContainer>
						<Button><Link to={`/contact`} style={{ textDecoration: 'none', color:'black'}}>Contact Us</Link></Button>
						</ImgContainer>
					
				</div>

				<SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook onClick={()=>{window.open('https://www.facebook.com/Green.Grocery.30/', '_blank');}}/>
          </SocialIcon>
          <SocialIcon color="E4405F">
          {/* <Link <Instagram /></Link> */}
          <Instagram onClick={()=>{window.open('https://www.instagram.com/green_grocery_30/', '_blank');}}/>
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter onClick={()=>{window.open('https://twitter.com/GreenGrocery30', '_blank');}}/>
          </SocialIcon>
          <SocialIcon color="000000">
            <GitHub onClick={()=>{window.open('https://github.com/fsd30/Green-Grocery', '_blank');}} />
          </SocialIcon>
        </SocialContainer>
			</div>
			<div class="image-section">
				<img src={'https://gensolarenergy.com/wp-content/uploads/2021/06/about-us-1-2048x2048.png'}></img>
			</div>
		</div>
	</div>

	
</body>
        
        {/* <Newsletter/> */}
        <Footer/>
      </div>
    
      );
    };
export default Privacy;