import Home from "./pages/home/Home"
import Single from "./pages/single/Single"
import Create from "./pages/create/Create"
import Navbar from "./components/navbar/Navbar"
import Login from "./pages/login/Login"
import Settings from "./pages/settings/Settings"
import Register from "./pages/register/Register"
import About from "./pages/about/About"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/create">
          {user ? <Create/> : <Register/>}
        </Route>
        <Route path="/login">
          {user ? <Home/> : <Login/>}
        </Route>
        <Route path="/register">
          {user ? <Home/> : <Register/>}
        </Route>
        <Route path="/settings">
          {user ? <Settings/> : <Register/>}
        </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;