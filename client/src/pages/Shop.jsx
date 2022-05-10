import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
//import Products from "../components/Products";
//import ProductsCopy from "../components/ProductsCopy";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router";
import { useState } from "react";
import Pagination from '../components/Pagin';
import Posts from '../components/Posts';
import { useEffect } from "react";
import axios from "axios";
//import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";


const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  border-style: solid;
  border-color: black;
  border-width: 1px;
  ${mobile({ margin: "10px 0px" })}
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  // justify-contents: center;
  justify-content: space-between;
  align-items:center;
  margin-left: 20px;
  width: 35%;
`;

const ListItem = styled.li`
  width: 50%;
  margin-left: 10px;
  margin-bottom: 10px;
  margin-right: 10px;

`;

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

const Option = styled.option``;

const Shop = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("/api/products");
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  // const handleFilters = (e) => {
  //   const value = e.target.value;
  //   setFilters({
  //     ...filters,
  //     [e.target.name]: value,
  //   });
  // };

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Shop</Title>
      <List>
          <FilterText>Categories :</FilterText>
          <Button><Link to={`/products/Vegetable`} style={{ textDecoration: 'none', color: 'black' }}>Vegetables</Link></Button>
          
          <Button><Link to={`/products/Fruit`} style={{ textDecoration: 'none', color: 'black' }}>Fruits</Link></Button>
      
          <Button><Link to={`/products/Dairy`} style={{ textDecoration: 'none', color: 'black' }}>Dairy</Link></Button>
      </List>  

      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      {/* <Newsletter /> */}
      <Footer />
    </Container>
  );
};

export default Shop;
