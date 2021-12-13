import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";



const Image = styled.img`
border-radius: 3.5%;

  width: 100%;
  height: 100%;
  opacity:1;
  object-fit: cover;
  ${mobile({ height: "20vh" })}

`;

const Info = styled.div`
  border-radius: 3.5%;
  opacity: 0.8;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  &:hover {
    // background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
const Container = styled.div`
  border-radius: 3.5%;

  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
