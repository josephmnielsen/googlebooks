import Home from './pages/Home'
import Saved from './pages/Saved'
import Nav from './components/AppBar'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'



const App = () => {

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/saved" component={Saved} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;