import { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { useAlert } from 'react-alert'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right,
      rgba(121, 17, 9, 100),
      rgba(0, 93, 255, 100)
    );
    // background-image: linear-gradient(to right, red , blue);
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  border-radius: 2.5%;
  width: 40%;
  height: 45%;
  padding: 20px;
  background-color: white;
  align-items: center;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 34px;
  font-weight: 600;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 60%;
  margin: 10px 0;
  font-size: 20px;
  padding: 10px;
  border-style: solid;
    border-color: black;
  border-width: 2px;
    border-radius: 4.5%;
    transition: all 0.5s ease;
  &:hover {
    background-color: transparent;
    transform: scale(1.1);
  }
`;

const Button = styled.button`
  width: 50%;
  border: none;
  padding: 15px 20px;
  font-size: 14px;
  background-color: teal;
  color: white;
  cursor: pointer;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-top: 20px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Button2 = styled.button`
  width: 40%;
  font-size: 14px;
  border: none;
  padding: 15px 15px;
  background-color: green;
  color: white;
  cursor: pointer;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-top: 20px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Lik = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  // const alert = useAlert();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title><center>SIGN IN</center></Title>
        <Form>
          <Input
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </Button>
          {/* {error && <Error>Something went wrong...</Error>} */}
          {/* if ({error})
            alert.show('Oh look, an alert!'); */}

          <Lik>DO NOT YOU REMEMBER THE PASSWORD?</Lik>
          <Button2><Link to="/register" style={{ textDecoration: 'none', color: 'white' }}>CREATE A NEW ACCOUNT</Link></Button2>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
