import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  GitHub,
  Room,
  Twitter,
} from "@material-ui/icons";
// import GitHubIcon from '@mui/icons-material/GitHub';
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  background-color: #e3faff;
  border-radius: 2.5%;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor:pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo><Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>Green Grocery</Link></Logo>
        <Desc>
      We are here to making your lives simpler as you will find all the necessities and quality products in one place at low prices.
      Order thousands of products at just a tap that are much more hygenic from your neighbourhood stores.
        </Desc>
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
      </Left>
      <Center>
        <Title>Useful Links</Title>
        
        <List>
          
          <ListItem><Link to={`/shop`} style={{ textDecoration: 'none', color: 'black' }}>Shop</Link></ListItem>
          
          
          <ListItem><Link to={`/cart`} style={{ textDecoration: 'none', color: 'black' }}>Cart</Link></ListItem>
          
          <ListItem><Link to={`/products/Vegetable`} style={{ textDecoration: 'none', color: 'black' }}>Vegetables</Link></ListItem>
          
          <ListItem><Link to={`/products/Fruit`} style={{ textDecoration: 'none', color: 'black' }}>Fruits</Link></ListItem>
      
          <ListItem><Link to={`/products/Dairy`} style={{ textDecoration: 'none', color: 'black' }}>Dairy</Link></ListItem>
          <ListItem><Link to={`/aboutus`} style={{ textDecoration: 'none', color: 'black' }}>AboutUs</Link></ListItem>
          <ListItem><Link to={`/faq`} style={{ textDecoration: 'none', color: 'black' }}>Faq</Link></ListItem>
          <ListItem><Link to={`/contact`} style={{ textDecoration: 'none', color: 'black' }}>ContactUs</Link></ListItem>
          <ListItem><Link to={`/license`} style={{ textDecoration: 'none', color: 'black' }}>License</Link></ListItem>
          <ListItem><Link to={`/privacy`} style={{ textDecoration: 'none', color: 'black' }}>Privacy</Link></ListItem>

        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> <a style={{textDecoration: 'none', color: 'black'}} href="https://goo.gl/maps/xe66J9DxqBAisqsN6" target="_blank">SriCity, India</a>
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> <a style={{textDecoration: 'none', color: 'black'}}href="tel:+91 9490342221">+91 9490342221</a>
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> <a style={{textDecoration: 'none', color: 'black'}}href="mailto:contact@greengrocery.com" >contact@greengrocery.com</a>
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
