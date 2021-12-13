import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
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
        <Logo>GreenGrocery</Logo>
        <Desc>
        Don’t have time for buying groceries from the market or you are unhappy with the quality of 
        the products that are available at the nearest grocery store? Luckily, We are here to 
        making your lives simpler as you will find all the necessities in one place. 
        You can get quality products of your choice at low prices. 
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        
        <List>
          
          <ListItem><Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>Home</Link></ListItem>
          
          
          <ListItem><Link to={`/cart`} style={{ textDecoration: 'none', color: 'black' }}>Cart</Link></ListItem>
          
          <ListItem><Link to={`/products/Vegetable`} style={{ textDecoration: 'none', color: 'black' }}>Vegetables</Link></ListItem>
          
          <ListItem><Link to={`/products/Fruit`} style={{ textDecoration: 'none', color: 'black' }}>Fruits</Link></ListItem>
      
          <ListItem><Link to={`/products/Dairy`} style={{ textDecoration: 'none', color: 'black' }}>Dairy</Link></ListItem>
          <ListItem><Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>My Account</Link></ListItem>
          <ListItem><Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>Order Tracking</Link></ListItem>
          <ListItem><Link to={`/contact`} style={{ textDecoration: 'none', color: 'black' }}>ContactUs</Link></ListItem>
          <ListItem><Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>Wishlist</Link></ListItem>
          <ListItem><Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>Terms</Link></ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> SriCity, India
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +91 98765 43210
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> contact@farmer.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
