import Home from './pages/Home.js'
import Saved from './pages/Saved.js'
import Nav from './components/AppBar'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'



const App = () => {

  return (
      <Router>
        <Switch>
          <Nav />
          <Route exact path="/" component={Home}/>
          <Route path="/saved" component={Saved} />
        </Switch>
      </Router>
  );
}

export default App;