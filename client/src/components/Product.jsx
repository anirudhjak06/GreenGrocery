import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { Typography } from "@material-ui/core";


const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
border-radius: 4.5%;

`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  // background-color: #c73434
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
border-radius: 4.5%;
background-color: #d2f5fc;
  height: 100%;
  width: 100%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e1ebea;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = ({ item }) => {

  const { color, size } = item;
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();




  const handleClick = (e) => {
    console.log(color, size);

    dispatch(
      addProduct({ ...item, quantity, color, size })
    );
  };
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      {item.stock === 0 && <Info><Typography variant="subtitle1" style={{ color: 'white' }}>Out Of Stock</Typography></Info>}
      {item.stock !== 0 && <Info>
        <Icon>
          <ShoppingCartOutlined onClick={handleClick} />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
          {/* <Button onClick={handleClick}>ADD TO CART</Button> */}
        </Icon>
      </Info>}
    </Container>
  );
};

export default Product;
