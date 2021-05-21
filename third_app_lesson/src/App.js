
import Navbar from "./components/Navbar"
import Home from "./components/Home" 
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from "./components/Create"
import BlogDetails from "./components/BlogDetails"



function App() {
  const title = "Welcome to the new blog"
  return (
<Router>
<div className="App">
      <Navbar/>
      <div className="content">
        <Switch>  {/*Content inside the switch is going to change depending on the route*/}
          <Route exact path  = "/">
          <Home/>
          </Route>

          <Route  path="/create">
            <Create/>
          </Route>

          <Route path="/blogs/:id">
            <BlogDetails/> {/*The id represents a route parameter if the blog changes*/}
          </Route>

        </Switch>
      </div>
    </div>
</Router>
 
  );
}

export default App;
