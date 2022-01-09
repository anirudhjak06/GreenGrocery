import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact2";
// import Faq from "./pages/Faq";
//import Faq3 from "./pages/Faq3";
import Privacy from "./pages/Privacy";
import License from "./pages/License";
import AboutUs from "./pages/AboutUs";
import User from "./pages/User";
import Shop from "./pages/Shop";
import Faq from "./pages/faq/Faq";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  // const user = true;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/success/:id">
          <Success />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/privacy">
          <Privacy />
        </Route>
        <Route path="/license">
          <License />
        </Route>
        <Route path="/aboutus">
          <AboutUs />
        </Route>
        <Route path="/faq">
          <Faq />
        </Route>
        <Route path="/user/:id">
          <User />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>

        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        {/* <Route path="/logout">{user ? <Redirect to="/" /> : <Logout />}</Route> */}
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
