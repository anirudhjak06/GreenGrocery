import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";


function App() {
  let volunteer = false;
  try{
    const volunteer1 = useSelector((state) => state.user.currentUser.isVolunteer);
    console.log("hello" + volunteer1);

    volunteer = volunteer1;
  }
  catch(err){
    console.log(err);
    // volunteer = false;
  }
  // const volunteer = true;
  console.log(volunteer);
  if (!volunteer){
    return (
      <Router>
        <Switch>
          <Route path="/"><Login /></Route>
        </Switch>
      </Router>
    );
  }
  else{
    return (
      <Router>
        <Switch>
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route path="/"><NewProduct /></Route>
                {/* <NewProduct />
              </Route> */}
              
            </div>
          </>
        </Switch>
      </Router>
    );
  }
}

export default App;
